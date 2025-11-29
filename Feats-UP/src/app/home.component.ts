import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  usuario = {
    nombre: 'aa ss',
    correo: 'angek@gmail.com'
  };

  totalReservaciones = 0;

  cerrarSesion() {
    console.log('Sesión cerrada');
    // Aquí puedes agregar lógica de logout o redirección
  }

  crearReservacion() {
    console.log('Crear nueva reservación');
    // Aquí puedes navegar o abrir formulario
  }
}