import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginDoctaComponent } from './login-docta/login-docta.component';
import { LoginComponent } from './login/login.component';



@NgModule({
  declarations: [
    LoginDoctaComponent,
    LoginComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    LoginDoctaComponent,
    LoginComponent
  ]

})
export class AuthModule { }
