import { Injectable } from '@angular/core';

import {HttpClient, HttpResponse} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpClientService {

  constructor(
    private http: HttpClient
  ){ }

  getPing() {
    var res = this.http.get('http://localhost:8080/v1/systems/ping');
    res.subscribe (
      res => {
      },
      err  => {
        console.error(err.status + ":" + err.statusText);
      }
    )
  };

}
