import { ApiService } from './../api/api.service';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(
    private apiService: ApiService
    ) { }

  public getHistorico(url: any): Observable<any> {
    return this.apiService.get<any>(url);
  }
}
