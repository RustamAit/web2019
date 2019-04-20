import { Component, OnInit } from '@angular/core';
import {TaskListService} from '../services/TaskListService';
import {ITaskList} from '../models/ITaskList';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  taskList: ITaskList[];
  constructor(private taskListService: TaskListService) { }

  ngOnInit() {
        this.getTaskLists();
  }


  getTaskLists(): void {
    // this.task_list = this.taskListService.getTaskLists();
    this.taskListService.getTaskLists()
      .then(taskList => {
        this.taskList = taskList;
        console.log('tasklist', this.taskList);
      });
  }
}
