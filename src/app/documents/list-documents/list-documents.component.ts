import { Component, OnInit } from '@angular/core';
import { DocumentType } from '../interfaces/documents.interface';
import { Observable } from 'rxjs';
import { DocumentsService } from '../services/documents.service';

const ELEMENT_DATA: DocumentType[] = [];

@Component({
  selector: 'app-list-documents',
  templateUrl: './list-documents.component.html',
  styleUrls: ['./list-documents.component.scss']
})
export class ListDocumentsComponent implements OnInit {

  displayedColumns: string[] = [
    'Tipo Documento',	
    'Agrupamiento',	
    'N° Id Br',
    'Código Cliente',	
    'FechaEmisión',	
    'FechaVencimiento',
    'MontoFacturado',
    'MontoPagado',
    'MontoPagar'
    ];
  dataSource = ELEMENT_DATA;

  constructor( private documentService: DocumentsService ) { }

  ngOnInit(): void {
    this.getDocumentsList();
  }

   
  getDocumentsList(): Observable<DocumentType[]> {

    this.documentService.getDocuments().subscribe( (resp: DocumentType[]) => {
      this.dataSource = resp;
      console.log(this.dataSource);
    });

    return this.documentService.getDocuments();
  }
    

  

}
