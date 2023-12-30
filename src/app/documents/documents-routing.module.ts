import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ListDocumentsComponent } from './list-documents/list-documents.component';
import { ListClientsComponent } from './list-clients/list-clients.component';

const routes: Routes = [
  {
    path:'',
    children:[
      {path:'list', component:ListDocumentsComponent},
      {path:'clients', component:ListClientsComponent},
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
