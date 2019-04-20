import { Injectable } from '@angular/core';
import {ITask} from '../models/ITask';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject, asapScheduler, pipe, of, from, interval, merge, fromEvent } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private http: HttpClient) { }
  taskListURL = 'http://127.0.0.1:8000/task_array/?task_list_id=';
  taskDetailsURL = 'http://127.0.0.1:8000/task_array/';

  getTaskLists(id: number): Promise<ITask[]> {
    return this.http.get(this.taskListURL + id).toPromise().then(
      response => response as ITask[]
      );
  }

  getTask(taskId: number): Promise<ITask> {
    return this.http.get(this.taskDetailsURL + taskId).toPromise().then(
      task => task as ITask
    );
  }
}
