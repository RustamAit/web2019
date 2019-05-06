import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TaskListComponent} from './taskList/task-list.component';
import {TaskComponent} from './task/task.component';
import {TaskDetailsComponent} from './task-details/task-details.component';

const routes: Routes = [
  {path: 'taskList', component: TaskListComponent},
  {path: 'taskList/:id/tasks', component: TaskComponent},
  {path: 'task/:taskId', component: TaskDetailsComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
