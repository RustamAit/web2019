import { Injectable } from '@angular/core';
import {ITask} from '../models/ITask';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject, asapScheduler, pipe, of, from, interval, merge, fromEvent } from 'rxjs';
import {ITaskList} from '../models/ITaskList';

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

  createTask(task: ITaskList): Promise<ITask> {
    return this.http.post(this.taskListURL, task).toPromise().then(
      responce => responce as ITask
    );
  }


  updateTask(task: ITaskList): Promise<ITask> {
    return this.http.put(this.taskListURL + '/' + task.id, task).toPromise().then(
      responce => responce as ITask
    );
  }

  deleteTask(taskId: number) {
    this.http.delete(this.taskListURL + '/' + taskId);
  }

}
