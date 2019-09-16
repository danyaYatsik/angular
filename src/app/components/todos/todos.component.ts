import {Component, OnDestroy, OnInit} from '@angular/core';
import {TodosService} from "../../shared/todos.service";

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit, OnDestroy {

  private isLoading = true;
  private subscription;
  private searchString = '';

  constructor(private todosService: TodosService) {
  }

  ngOnInit() {
    this.subscription = this.todosService.fetch().subscribe(event => this.isLoading = false);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  itemClicked(id: number) {
    this.todosService.todos.forEach(todo => {
      if (todo.id === id) todo.completed = !todo.completed;
    })
  }

}
