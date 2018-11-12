import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { map, tap } from 'rxjs/operators';
import { of } from 'rxjs';
import { ApiService } from '../api/api.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService implements CanActivate {

  constructor(public http: HttpClient, public apiService: ApiService) {
  }

  canActivate() {
    const sesion =  this.buscarSesionLocal() !== null;
    if (! sesion) {
      window.location.href = '/#/login';
    }
    return sesion;
  }

  iniciarSesion(user) {
    return   this.apiService.post<any>('authenticateUser', user) // || of({rol: 'Administrador'})
    .pipe(
      tap(this.guardarSesionLocal.bind(this))
    );
  }

  buscarSesionLocal(): string {
    return localStorage.getItem('SESSION');
  }

  guardarSesionLocal(usuario) {
    localStorage.setItem('SESSION', usuario.rol);
  }

}
