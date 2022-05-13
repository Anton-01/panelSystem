import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { GLOBAL } from './Global';

@Injectable({
  providedIn: 'root'
})
export class TestService {
  public url = GLOBAL.url

  constructor(
    private __httpClient: HttpClient
  ) {
    console.log(this.url)
  }

  testProof(): Observable<any>{
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.__httpClient.get(`${this.url}/testProof`, { headers: headers})
  }
}
