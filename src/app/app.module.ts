import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// mis modulos
import { SharedModule } from './shared/shared.module';
import { AuthRoutingModule } from './auth/auth-routing.module';
import { DocumentsModule } from './documents/documents.module';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,

    SharedModule,
    AuthRoutingModule,
    DocumentsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
