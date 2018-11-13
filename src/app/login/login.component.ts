import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../services/login/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public formLogin: FormGroup;

  constructor(
    private router: Router,
    private login: LoginService
    ) { }

  ngOnInit() {
    this.formLogin = new FormGroup({
      'usuario': new FormControl('', [
        Validators.required,
        Validators.minLength(3)
      ]),
      'clave': new FormControl('', [
        Validators.required,
        Validators.minLength(3)
      ])
    });
  }

  public ingresar(): void {
    if (this.formLogin.valid) {
      this.login.iniciarSesion(this.formLogin.value.usuario, this.formLogin.value.clave)
      .subscribe(res => {
        console.log('REspuesta: ' +  res);
      });
      this.router.navigate(['/']);
    }
  }

}
