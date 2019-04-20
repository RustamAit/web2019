import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {ITaskList} from '../models/ITaskList';

@Injectable({
  providedIn: 'root'
})
export class TaskListService {

  constructor(private http: HttpClient) { }
  taskListURL = 'http://127.0.0.1:8000/task_list_array';
  getTaskLists(): Promise<ITaskList[]> {
    return this.http.get(this.taskListURL).toPromise().then(
      response => response as ITaskList[]
      );
  }
}
