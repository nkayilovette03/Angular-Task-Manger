import { Routes } from '@angular/router';
import { TasksComponent } from './component/tasks/tasks.component';
import { AboutComponent } from './component/about/about.component';

export const routes: Routes = [
  { path: '', component: TasksComponent },
  { path: 'about', component: AboutComponent },
];
