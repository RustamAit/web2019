import { BrowserModule } from '@angular/platform-browser';
import {ClassProvider, NgModule} from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TaskListComponent } from './taskList/task-list.component';
import { TaskComponent } from './task/task.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {TaskListService} from './services/TaskListService';
import {TaskService} from './services/TaskService';
import { TaskDetailsComponent } from './task-details/task-details.component';
import {FormsModule} from '@angular/forms';
import {MainInterceptor} from './MainInterceptor';

@NgModule({
  declarations: [
    AppComponent,
    TaskListComponent,
    TaskComponent,
    TaskDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    TaskListService,
    TaskService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: MainInterceptor,
      multi: true
    } as ClassProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
