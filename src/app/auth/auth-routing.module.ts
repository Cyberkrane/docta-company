import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { LoginDoctaComponent } from './pages/login-docta/login-docta.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {path:'login', component:LoginComponent},
      {path:'loginAdmin', component:LoginDoctaComponent},
      {path:'**', redirectTo:'login'}
    ]
  }
];

@NgModule({
  imports: [
  RouterModule.forChild(routes)
  ]
})
export class AuthRoutingModule { }
