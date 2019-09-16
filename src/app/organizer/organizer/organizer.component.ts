import {Component, OnInit} from '@angular/core';
import {MomentService} from "../shared/moment.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Task, TasksService} from "../shared/tasks.service";
import {switchMap} from "rxjs/operators";

@Component({
  selector: 'app-organizer',
  templateUrl: './organizer.component.html',
  styleUrls: ['./organizer.component.css']
})
export class OrganizerComponent implements OnInit {

  form: FormGroup;
  tasks: Task[] =[];

  constructor(private momentService: MomentService,
              private tasksService: TasksService) {
  }

  ngOnInit() {
    this.momentService.date.pipe(
      switchMap(value => this.tasksService.get(value))
    ).subscribe(tasks => this.tasks = tasks);
    this.form = new FormGroup({
      task: new FormControl("", Validators.required)
    })
  }

  remove(task: Task) {
    this.tasksService.delete(task).subscribe(() => {
      this.tasks = this.tasks.filter(value => value.id !== task.id)
    });
  }

  submit() {
    const {task} = this.form.value;
    this.tasksService.create({
      value: task,
      date: this.momentService.date.getValue().format("MM-DD-YYYY")
    }).subscribe(value => {
      this.form.reset();
      this.tasks.push(value);
    })
  }

}
