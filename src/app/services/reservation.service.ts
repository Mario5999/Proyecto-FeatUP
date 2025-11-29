import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Reservation } from '../models/reservation.model';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {
  private currentReservation = new BehaviorSubject<Reservation | null>(null);

  setReservation(reservation: Reservation): void {
    this.currentReservation.next(reservation);
  }

  getReservation(): Observable<Reservation | null> {
    return this.currentReservation.asObservable();
  }

  clearReservation(): void {
    this.currentReservation.next(null);
  }
}