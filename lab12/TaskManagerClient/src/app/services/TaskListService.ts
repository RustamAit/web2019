import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {ITaskList, ITaskListPost} from '../models/ITaskList';
import {Log} from '@angular/core/testing/src/logger';
import {IDeleteResponce} from '../models/IDeleteResponce';

@Injectable({
  providedIn: 'root'
})
export class TaskListService {

  constructor(private http: HttpClient) { }
  taskListURL = 'http://127.0.0.1:8000/task_list_array/';
  getTaskLists(): Promise<ITaskList[]> {
    return this.http.get(this.taskListURL).toPromise().then(
      response => response as ITaskList[]
      );
  }


  createTaskList(taskListName: string): Promise<ITaskList> {
    const body = {name: taskListName};
    return this.http.post(this.taskListURL, body).toPromise().then(
      response => response as ITaskList
    );
  }


  updateTaskList(taskListId: number, taskListName: string): Promise<ITaskList> {
    const body = {name: taskListName};
    return this.http.put(this.taskListURL + taskListId, body).toPromise().then(
      response => response as ITaskList
    );
  }

  deleteTaskList(taskListId: number): Promise<IDeleteResponce>  {
    return this.http.delete(this.taskListURL + taskListId).toPromise().then(
      response => response as IDeleteResponce
    );
  }
}
