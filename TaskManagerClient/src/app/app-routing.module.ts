import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MainComponent} from './main/main.component';
import {TestComponent} from './test/test.component';
import {TaskDetailsComponent} from './task-details/task-details.component';

const routes: Routes = [
  {path: 'taskList', component: MainComponent},
  {path: 'taskList/:id/tasks', component: TestComponent},
  {path: 'task/:taskId', component: TaskDetailsComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
