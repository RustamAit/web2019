import { Component, OnInit } from '@angular/core';
import {TaskListService} from '../services/TaskListService';
import {ITaskList} from '../models/ITaskList';

@Component({
  selector: 'app-main',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  public taskLists: ITaskList[];
  public name: any = '';
  public updateName: any = '';
  private taskListId: number;
  public isShowUpdateLayout = false;
  public isUserAuthorized = false;
  public userName: any = '';
  public userPassword: any = '';

  constructor(private taskListService: TaskListService) { }

  ngOnInit() {
        this.getTaskLists();
        if (localStorage.getItem('token') !== null) {
            this.isUserAuthorized = true;
        }
  }

  login() {
    this.taskListService.login(this.userPassword, this.userPassword).then(
        res => {
          localStorage.setItem('token', res.token);
          window.location.reload();
        }
    );
  }


  getTaskLists(): void {
    // this.task_list = this.taskListService.getTaskLists();
    this.taskListService.getTaskLists()
      .then(taskList => {
        this.taskLists = taskList;
        console.log('tasklist', this.taskLists);
      });
  }

  createTaskList() {
    if (this.name !== '') {
      this.taskListService.createTaskList(this.name).then(
  taskList => {
       this.taskLists.push(taskList);
       });
      }
  }

  deleteTaskList(taskListId: number) {
    this.taskListService.deleteTaskList(taskListId).then(
      deleteResponse => window.location.reload()
    );
  }

  updateTaskList() {
    this.taskListService.updateTaskList(this.taskListId, this.updateName
    ).then(
      res => this.isShowUpdateLayout = false
    );
  }

  showUpdateLayout(taskListId: number) {
    this.taskListId = taskListId;
    this.isShowUpdateLayout = true;
  }


}
