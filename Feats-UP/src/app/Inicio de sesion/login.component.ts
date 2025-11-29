import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterModule, ReactiveFormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  form;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      correo: ['', [Validators.required, Validators.email]],
      nombre: ['', Validators.required],
      apellidos: ['', Validators.required]
    });
  }

  ingresar() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    console.log('Formulario válido:', this.form.value);
  }
}