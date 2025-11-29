import { Routes } from '@angular/router';
import { InicioComponent } from './Inicio/inicio.component';

export const routes: Routes = [
  { path: '', component: InicioComponent },
  {
    path: 'inicio',
    loadComponent: () =>
      import('./Inicio/inicio.component').then(m => m.InicioComponent)
  },
  {
    path: 'login',
    loadComponent: () =>
      import('./Inicio de sesion/login.component').then(m => m.LoginComponent)
  },
  {
    path: 'register',
    loadComponent: () =>
      import('./Registro/register.component').then(m => m.RegisterComponent)
  },
  {
    path: 'home',
    loadComponent: () =>
      import('./home.component').then(m => m.HomeComponent)
  }
];