import { Component, OnInit } from '@angular/core';
import {TaskService} from '../services/TaskService';
import {ActivatedRoute} from '@angular/router';
import {ITask} from '../models/ITask';

@Component({
  selector: 'app-task-details',
  templateUrl: './task-details.component.html',
  styleUrls: ['./task-details.component.css']
})
export class TaskDetailsComponent implements OnInit {
  public task: ITask;
  public taskID: number;
  constructor(
    private taskProvider: TaskService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.taskID = Number(this.route.snapshot.paramMap.get('taskId'));
    this.taskProvider.getTask(this.taskID).then(
      task => this.task = task
    );
  }

}
