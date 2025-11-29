import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { ReservationService } from '../../services/reservation.service';
import { Reservation } from '../../models/reservation.model';

@Component({
  selector: 'app-reservation-success',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './reservation-success.component.html',
  styleUrls: ['./reservation-success.component.css']
})
export class ReservationSuccessComponent implements OnInit {
  reservation: Reservation | null = null;
  formattedDate: string = '';

  constructor(
    private router: Router,
    private reservationService: ReservationService
  ) {}

  ngOnInit(): void {
    this.reservationService.getReservation().subscribe(res => {
      if (res) {
        this.reservation = res;
        this.formattedDate = this.formatDate(res.createdAt);
      } else {
        this.router.navigate(['/']);
      }
    });
  }

  formatDate(date: Date): string {
    const options: Intl.DateTimeFormatOptions = {
      day: '2-digit',
      month: 'long',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    };
    return new Date(date).toLocaleDateString('es-ES', options);
  }

  goBack(): void {
    this.reservationService.clearReservation();
    this.router.navigate(['/']);
  }

  goToDashboard(): void {
    this.reservationService.clearReservation();
    this.router.navigate(['/']);
  }
}