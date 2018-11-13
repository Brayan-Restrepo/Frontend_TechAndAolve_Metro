import { CanActivate } from '@angular/router';
import { ApiService } from './../api/api.service';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminService implements CanActivate {

  canActivate() {
    return localStorage.getItem('SESSION') === 'Administrador';
  }

  constructor(
    private apiService: ApiService
    ) { }

  public getHistorico(url: any): Observable<any> {
    return this.apiService.get<any>(url);
  }
}
