import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {delay, tap} from "rxjs/operators";
import {Observable} from "rxjs";

export interface Todo {
  id: number
  title: string
  completed: boolean
}

@Injectable({providedIn: "root"})
export class TodosService {

  private _todos: Todo[] = [];

  constructor(private http: HttpClient) {
  }

  get todos(): Todo[] {
    return this._todos;
  }

  fetch(): Observable<Todo[]> {
    return this.http.get<Todo[]>('https://jsonplaceholder.typicode.com/todos')
      .pipe(
        delay(1000),
        tap(x => this._todos = x)
      )
  }
}
