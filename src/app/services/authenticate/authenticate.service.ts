import { ApiService } from './../api/api.service';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {

  constructor(
    private apiService: ApiService
  ) { }

  public postAuthenticate(url: any, data: any): Observable<any> {
    return this.apiService.post<any>(url, data);
  }
}
