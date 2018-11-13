import { AdminService } from './services/admin/admin.service';
import { HistoricoComponent } from './pages/historico/historico.component';
import { MapaComponent } from './pages/mapa/mapa.component';

import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { PagesComponent } from './pages/pages.component';
import { BuscarComponent } from './pages/buscar/buscar.component';
import { LoginService } from './services/login/login.service';

export const ROUTES: Routes = [
];

const appRoutes: Routes = [
  {
    canActivate: [LoginService],
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
        component:  HistoricoComponent,
        canActivate: [AdminService]
      },
    ]
  },
  { path: 'login', component: LoginComponent },
  { path: '**', redirectTo: 'mapa',  pathMatch: 'full' }
];

export const APP_ROUTES = RouterModule.forRoot(appRoutes, { useHash: true });
