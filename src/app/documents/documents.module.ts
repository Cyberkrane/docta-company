import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListDocumentsComponent } from './list-documents/list-documents.component';
import { DocumentsRoutingModule } from './documents-routing.module';
import {MatTableModule} from '@angular/material/table';
import { HttpClientModule } from '@angular/common/http';
import { ListClientsComponent } from './list-clients/list-clients.component';





@NgModule({
  declarations: [
    ListDocumentsComponent,
    ListClientsComponent
  ],
  imports: [
    CommonModule,
    DocumentsRoutingModule,
    MatTableModule,
    HttpClientModule
  ],
  exports:[
    ListDocumentsComponent
  ]
})
export class DocumentsModule { }
