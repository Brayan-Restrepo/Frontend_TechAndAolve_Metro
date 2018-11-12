import { AuthenticateService } from '../services/authenticate/authenticate.service';
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
    private router: Router,
    private _authenticateService: AuthenticateService
    ) { }

  ngOnInit() {
    this.formLogin = new FormGroup({
      'userName': new FormControl('', [
        Validators.required,
        Validators.minLength(3)
      ]),
      'password': new FormControl('', [
        Validators.required,
        Validators.minLength(3)
      ])
    });
  }

  public ingresar(): void {
    if (this.formLogin.valid) {
      this._authenticateService.postAuthenticate('authenticateUser', this.formLogin.value).subscribe(response => {
        this.router.navigate(['/']);
      });
    }
  }

}
