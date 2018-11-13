import { LoginService } from './../../services/login/login.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(
    public loginService: LoginService,
    private router: Router) { }

  ngOnInit() {
  }

  public salir(): void {
    localStorage.clear();
    this.router.navigate(['/login']);
  }
}
