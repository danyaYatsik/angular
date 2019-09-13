import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";
import * as moment from "moment";

@Injectable()
export class TasksService {
  constructor(private http: HttpClient) {
  }

  static url = "https://my-angular-organizer.firebaseio.com/tasks";

  create(task: Task): Observable<Task> {
    return this.http
      .post<CreateResponse>(`${TasksService.url}/${task.date}.json`, task)
      .pipe(map(response => {
        return {...task, id: response.name}
      }))
  }

  get(m: moment.Moment): Observable<Task[]> {
    return this.http
      .get<Task[]>(`${TasksService.url}/${m.format("MM-DD-YYYY")}.json`)
      .pipe(map(tasks => {
        if (!tasks) return [];
        return Object.keys(tasks).map(key => ({...tasks[key], id: key}))
      }))
  }

  delete(task: Task): Observable<void> {
    return this.http.delete<void>(`${TasksService.url}/${task.date}/${task.id}.json`)
  }
}

export interface Task {
  id?: string,
  value: string,
  date: string
}

interface CreateResponse {
  name: string
}
