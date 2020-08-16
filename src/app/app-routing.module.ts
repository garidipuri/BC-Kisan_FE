import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './componenets/home/home.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { ChangePasswordComponent } from './components/change-password/change-password.component';
import { DashBoardComponent } from './components/dash-board/dash-board.component';

const routes: Routes = [
  {path:"login", component: LoginComponent}, 
  {path:"", component: HomeComponent},
  {path:"signup", component: SignUpComponent},
  {path:"forgotPassword",component:ForgotPasswordComponent},
  {path:"changePassword",component:ChangePasswordComponent },
  {path:"dashboard",component:DashBoardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
