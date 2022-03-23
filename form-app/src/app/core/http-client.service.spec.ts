import { TestBed } from '@angular/core/testing';


import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

export class HttpClientService {
  private url = "http://localhost:8080/v1/systems/ping";

  constructor(
    private http: HttpClient
  ){ }

  getPing(): Observable<Object> {
    return this.http.get(this.url);
  }

}