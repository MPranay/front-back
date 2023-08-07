import { Injectable,NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RegisterComponent } from './register/register.component';
import { authGuard } from './service/auth.guard';

const routes: Routes = [{
  path:"",  
  redirectTo:"register",
  pathMatch:"full"
  },
  {
    path:"login",  
    component: LoginComponent
  },
  {
    path:"register",  
    component: RegisterComponent
  },
  {
    path:"dashboard",canActivate:[authGuard],
    component: DashboardComponent
  },
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
