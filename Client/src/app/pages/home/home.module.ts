import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { TaskComponent } from './components/task/task.component';
import { SharedModule } from 'src/app/shared/shared/shared.module';
import { TaskDialogComponent } from './components/task-dialog/task-dialog.component';

@NgModule({
  declarations: [
    HomeComponent,
    SideBarComponent,
    TaskComponent,
    TaskDialogComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule,
  ]
})
export class HomeModule { }
