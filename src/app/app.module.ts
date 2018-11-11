import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BuscarComponent } from './pages/buscar/buscar.component';
import { HeaderComponent } from './shared/header/header.component';
import { PagesComponent } from './pages/pages.component';
import { LoginComponent } from './login/login.component';
import { APP_ROUTES } from './app.routes';
import { MapaComponent } from './pages/mapa/mapa.component';

@NgModule({
  declarations: [
    AppComponent,
    BuscarComponent,
    HeaderComponent,
    PagesComponent,
    LoginComponent,
    MapaComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTES
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
