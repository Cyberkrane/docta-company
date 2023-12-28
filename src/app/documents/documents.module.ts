import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListDocumentsComponent } from './list-documents/list-documents.component';
import { DocumentsRoutingModule } from './documents-routing.module';
import {MatTableModule} from '@angular/material/table';





@NgModule({
  declarations: [
    ListDocumentsComponent
  ],
  imports: [
    CommonModule,
    DocumentsRoutingModule,
    MatTableModule
  ],
  exports:[
    ListDocumentsComponent
  ]
})
export class DocumentsModule { }
