import { ApiService } from './../api/api.service';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InvitadoService {

  constructor(
    private apiService: ApiService
  ) { }

  public getEstasiones(): Observable<any> {
    return this.apiService.get<any>('underGroundStations');
  }

  public postFastestTravel(data: any): Observable<any> {
    return this.apiService.post<any>('fastestTravel', data);
  }
}
