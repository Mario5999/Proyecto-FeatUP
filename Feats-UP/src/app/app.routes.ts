import { Routes } from '@angular/router';
import { InicioComponent } from './inicio.component';

export const routes: Routes = [
  { path: '', component: InicioComponent },
  {
    path: 'login',
    loadComponent: () =>
      import('./login.component').then(m => m.LoginComponent)
  }
];