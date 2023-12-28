import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ListDocumentsComponent } from './list-documents/list-documents.component';

const routes: Routes = [
  {
    path:'',
    children:[
      {path:'list', component:ListDocumentsComponent},
      {path:'**', redirectTo:'list'}
    ]
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class DocumentsRoutingModule { }
