import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ReservationService } from '../../services/reservation.service';
import { Area, Reservation } from '../../models/reservation.model';

@Component({
  selector: 'app-reservation-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './reservation-form.component.html',
  styleUrls: ['./reservation-form.component.css']
})
export class ReservationFormComponent {
  clientName: string = 'aa ss';
  selectedArea: string = 'Salón Principal';
  time: string = '11:11';
  people: number = 17;

  areas: Area[] = [
    {
      id: 'principal',
      name: 'Salón Principal',
      description: 'Mesa general en el salón',
      emoji: '🍽️'
    },
    {
      id: 'ninos',
      name: 'Área de Niños',
      description: 'Espacio familiar con juegos',
      emoji: '🎈'
    },
    {
      id: 'privada',
      name: 'Área Privada',
      description: 'Espacio exclusivo y privado',
      emoji: '👑'
    }
  ];

  constructor(
    private router: Router,
    private reservationService: ReservationService
  ) {}

  selectArea(areaName: string): void {
    this.selectedArea = areaName;
  }

  confirmReservation(): void {
    if (this.isFormValid()) {
      const reservation: Reservation = {
        clientName: this.clientName,
        area: this.selectedArea,
        time: this.time,
        people: this.people,
        createdAt: new Date()
      };

      this.reservationService.setReservation(reservation);
      this.router.navigate(['/success']);
    }
  }

  isFormValid(): boolean {
    return !!(this.clientName && this.time && this.people > 0);
  }

  goToDashboard(): void {
    console.log('Ir al dashboard');
  }
}