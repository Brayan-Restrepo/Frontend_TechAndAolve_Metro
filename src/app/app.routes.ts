import { HistoricoComponent } from './pages/historico/historico.component';
import { MapaComponent } from './pages/mapa/mapa.component';

import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { PagesComponent } from './pages/pages.component';
import { BuscarComponent } from './pages/buscar/buscar.component';

export const ROUTES: Routes = [
];

const appRoutes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      {
        path: '',
        redirectTo: 'mapa',
        pathMatch: 'full',
       },
      {
        path: 'buscar',
        component:  BuscarComponent
      },
      {
        path: 'mapa',
        component:  MapaComponent
      },
      {
        path: 'historico',
        component:  HistoricoComponent
      },
    ]
  },
  { path: 'login', component: LoginComponent },
  { path: '**', redirectTo: 'mapa',  pathMatch: 'full' }
];

export const APP_ROUTES = RouterModule.forRoot(appRoutes, { useHash: true });
