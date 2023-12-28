import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes } from '@angular/router';
import { ListDocumentsComponent } from './list-documents/list-documents.component';

const routes: Routes = [
  {
    path:'',
    component:ListDocumentsComponent
  },
  {
    path:'list',
    component:ListDocumentsComponent
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class DocumentsRoutingModule { }
