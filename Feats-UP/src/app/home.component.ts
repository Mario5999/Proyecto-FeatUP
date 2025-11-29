import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  usuario = {
    nombre: 'aa ss',
    correo: 'angek@gmail.com',
    contrasena: '••••••••'
  };

  totalReservaciones = 0;

  cerrarSesion() {
    console.log('Sesión cerrada');
  }

  crearReservacion() {
    console.log('Crear nueva reservación');
  }
}