import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DocumentType } from '../interfaces/documents.interface';
import { Client } from '../interfaces/clients.interface';


@Injectable({
    providedIn: 'root'
})

export class DocumentsService {

    private urlDocs = 'http://localhost:3000/documentos';
    private urlClients = 'http://localhost:3000/clientes';

    constructor(private http: HttpClient) {

    }

    getDocuments(): Observable<DocumentType[]> {
        return this.http.get<DocumentType[]>(this.urlDocs);
    }
    
    getClientsList(): Observable<Client[]> {

        return this.http.get<Client[]>(this.urlClients);
    }

}
