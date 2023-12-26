import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginDoctaComponent } from './pages/login-docta/login-docta.component';
import { LoginComponent } from './login/login.component';
import { AuthRoutingModule } from './auth-routing.module';



@NgModule({
  declarations: [
    LoginDoctaComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule
  ],
  exports: [
    LoginDoctaComponent,
    LoginComponent
  ]

})
export class AuthModule { }
