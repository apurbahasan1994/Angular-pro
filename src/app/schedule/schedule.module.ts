import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SheduleComponent } from './components/shedule/shedule.component';
import { RouterModule, Routes } from '@angular/router';

export const ROUTES: Routes = [
  {
    path: '',
    component:SheduleComponent

  }
]

@NgModule({
  declarations: [
    SheduleComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES)
  ]
})
export class ScheduleModule { }
