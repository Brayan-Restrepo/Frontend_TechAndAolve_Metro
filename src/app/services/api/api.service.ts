
import {
  HttpClient
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private url;

  constructor(
    private http: HttpClient
    ) {
      // this.url = 'http://localhost:8080/api/';
      this.url = 'https://metro-8d0ee.firebaseio.com/';
    }


    public get<T>(path: string): Observable<T> {
      return this.http.get<Response>(this.url + path)
        .pipe(
          map( response => response['data'])
        );
    }

    public post<T>(path: string, data: any): Observable<T> {
      return this.http.post<Response>(this.url + path, data)
        .pipe(
          map(response => response['data'])
        );
    }

    private toURLParams(data: any): string {
      const url = Object.keys(data).map(function(k) {
        return encodeURIComponent(k) + '=' + encodeURIComponent(btoa(data[k]));
      }).join('&');
      return url;
    }
}
