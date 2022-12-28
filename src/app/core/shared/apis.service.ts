import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import {  Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ApisService {

  private apiURL = 'https://jsonplaceholder.typicode.com/albums';

  httpOptions = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json'
    })
}

  constructor(private _httpClient: HttpClient) {}

  getdata(): Observable<any> {
    return this._httpClient.get(this.apiURL)
  }
}
