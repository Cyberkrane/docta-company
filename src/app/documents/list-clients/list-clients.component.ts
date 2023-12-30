import { Component, OnInit } from '@angular/core';
import { Client } from '../interfaces/clients.interface';
import { DocumentsService } from '../services/documents.service';
import { Observable } from 'rxjs';

const ELEMENT_DATA: Client[] = [];


@Component({
  selector: 'app-list-clients',
  templateUrl: './list-clients.component.html',
  styleUrls: ['./list-clients.component.scss']
})
export class ListClientsComponent implements OnInit {

  displayedColumns: string[] = [
    'Codigo', 
    'Nombre', 
    'Apellido', 
    'Email', 
    'Telefono'
  ];
  dataSource = ELEMENT_DATA;

  constructor(private clientService: DocumentsService) { }

  ngOnInit(): void {
    this.getClientsList();
  }


  getClientsList(): Observable<Client[]> {

    this.clientService.getClientsList().subscribe( (resp: Client[]) => {
      this.dataSource = resp;
      console.log(this.dataSource);
    });

    return this.clientService.getClientsList();
}

}
