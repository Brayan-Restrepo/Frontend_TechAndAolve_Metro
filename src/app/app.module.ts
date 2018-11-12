import { AuthenticateService } from './services/authenticate/authenticate.service';
import { AdminService } from './services/admin/admin.service';
import { ApiService } from './services/api/api.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BuscarComponent } from './pages/buscar/buscar.component';
import { HeaderComponent } from './shared/header/header.component';
import { PagesComponent } from './pages/pages.component';
import { LoginComponent } from './login/login.component';
import { APP_ROUTES } from './app.routes';
import { MapaComponent } from './pages/mapa/mapa.component';
import { InvitadoService } from './services/invitado/invitado.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SweetAlert2Module } from '@toverux/ngx-sweetalert2';
import { HistoricoComponent } from './pages/historico/historico.component';

@NgModule({
  declarations: [
    AppComponent,
    BuscarComponent,
    HeaderComponent,
    PagesComponent,
    LoginComponent,
    MapaComponent,
    HistoricoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    SweetAlert2Module.forRoot({
      buttonsStyling: false,
      customClass: 'modal-content',
      confirmButtonClass: 'btn btn-primary',
      cancelButtonClass: 'btn'
    }),
    APP_ROUTES
  ],
  providers: [
    ApiService,
    InvitadoService,
    AdminService,
    AuthenticateService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
