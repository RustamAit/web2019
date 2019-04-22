import { Component, OnInit } from '@angular/core';
import {ITask} from '../models/ITask';
import {TaskService} from '../services/TaskService';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-test',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  public tasks: ITask[] = [];
  public taskList: any = {};

  public id: number;
  constructor(
    private taskProvider: TaskService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    if (this.id) {
      this.taskProvider.getTaskLists(this.id).then(tasks => {
        this.tasks = tasks;
      });
    }
  }

}
