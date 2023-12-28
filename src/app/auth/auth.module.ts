import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginDoctaComponent } from './pages/login-docta/login-docta.component';
import { LoginComponent } from './pages/login/login.component';
import { AuthRoutingModule } from './auth-routing.module';
import { VistaLoginComponent } from './components/vista-login/vista-login.component';
import { RegisterComponent } from './pages/register/register.component';



@NgModule({
  declarations: [
    LoginDoctaComponent,
    LoginComponent,
    VistaLoginComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule
  ],
  exports: [
    LoginDoctaComponent,
    LoginComponent,
    VistaLoginComponent
  ]

})
export class AuthModule { }
