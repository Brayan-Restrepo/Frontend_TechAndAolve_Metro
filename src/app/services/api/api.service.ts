
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
      this.url = 'http://localhost:8090/';
      // this.url = 'http://192.168.1.16:8090/';
    }


    public get<T>(path: string): Observable<T> {
      return this.http.get<T>(this.url + path);
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
