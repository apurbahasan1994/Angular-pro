import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/shared/guards/auth.guard';

const routes: Routes = [
  {path:'',pathMatch:'full',redirectTo:'schedule'},
  {path:'meals', canActivate:[AuthGuard],loadChildren:()=>import('./meals/meals.module').then(m=>m.MealsModule)},
  {path:'schedule', canActivate:[AuthGuard],loadChildren:()=>import('./schedule/schedule.module').then(m=>m.ScheduleModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
