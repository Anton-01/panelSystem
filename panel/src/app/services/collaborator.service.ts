import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { GLOBAL } from './Global';

@Injectable({
  providedIn: 'root'
})
export class CollaboratorService {

  public url = GLOBAL.url

  constructor( private __httpClient: HttpClient) { console.log(this.url) }

  loginAdmin( data: any): Observable<any>{
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.__httpClient.post(`${this.url}/login_admin`, data, { headers: headers})
  }

  registerCollaboratorAdmin( data: any): Observable<any>{
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.__httpClient.post(`${this.url}/register_collaborator_admin`, data, { headers: headers})
  }
}
