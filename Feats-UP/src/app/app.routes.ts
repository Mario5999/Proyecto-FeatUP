import { Routes } from '@angular/router';
import { InicioComponent } from './inicio.component';

export const routes: Routes = [
	{
		path: '',
		redirectTo: 'auth/login',
		pathMatch: 'full'
	},
	{
		path: 'auth',
		children: [
			{ path: 'login', component: InicioComponent },
			{ path: 'register', component: InicioComponent }
		]
	}
];
