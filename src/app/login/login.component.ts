import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public formLogin: FormGroup;

  constructor(
    private router: Router
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
    console.log(this.formLogin.valid);
    console.log(this.formLogin.value);
    if (this.formLogin.valid) {
      this.router.navigate(['/mapa']);
    }
  }

}
