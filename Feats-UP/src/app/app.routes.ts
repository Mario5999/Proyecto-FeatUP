import { Routes } from '@angular/router';
import { InicioComponent } from './inicio.component';

export const routes: Routes = [
  { path: '', component: InicioComponent },
  {
    path: 'inicio',
    loadComponent: () =>
      import('./inicio.component').then(m => m.InicioComponent)
  },
  {
    path: 'login',
    loadComponent: () =>
      import('./login.component').then(m => m.LoginComponent)
  },
  {
    path: 'register',
    loadComponent: () =>
      import('./register.component').then(m => m.RegisterComponent)
  }
];