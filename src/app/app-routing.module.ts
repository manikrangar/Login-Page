import { CanActivate } from '@angular/router';
import { AuthGuardService } from './../services/guard';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserProfileComponent } from './user-profile/user-profile.component';
const routes: Routes = [
  
  // {
  //   path:'',
  //   component:HomeComponent,
  //   canActivate:[AuthGuardService]

  // },
  {
    path:'login',
    component:LoginComponent,
  },
  {
    path:'register',
    component:RegisterComponent,
    

  },
  {
    path:'dashboard',
    component:DashboardComponent,
    canActivate:[AuthGuardService]
  },
  {
    path:'profile',
    component:UserProfileComponent,
    canActivate:[AuthGuardService]
  }
  
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule, FormsModule,
    ReactiveFormsModule]
})
export class AppRoutingModule { 

}
