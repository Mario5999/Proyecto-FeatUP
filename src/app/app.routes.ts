import { Routes } from '@angular/router';
import { ReservationFormComponent } from './components/reservation-form/reservation-form.component';
import { ReservationSuccessComponent } from './components/reservation-success/reservation-success.component';

export const routes: Routes = [
  { path: '', component: ReservationFormComponent },
  { path: 'success', component: ReservationSuccessComponent },
  { path: '**', redirectTo: '' }
];