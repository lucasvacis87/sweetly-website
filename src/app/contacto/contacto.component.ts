import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-contacto',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    HttpClientModule
  ],
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent {
  contactForm: FormGroup;
  isSubmitted: boolean = false;
  isSuccess: boolean = false;
  errorMessage: string = '';

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.contactForm = this.fb.group({
      nombre: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      mensaje: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.contactForm.invalid) return;
    const formData = this.contactForm.value;
    // Payload que se enviará al endpoint encargado de procesar el correo.
    // En un entorno real, este endpoint se debe configurar para enviar el email a lilidevacis@gmail.com.
    const payload = {
      to: 'lilidevacis@gmail.com',
      subject: 'Nuevo mensaje de contacto',
      body: `Nombre: ${formData.nombre}\nEmail: ${formData.email}\nMensaje: ${formData.mensaje}`
    };

    // En este ejemplo usamos un endpoint ficticio; reemplazalo por tu URL real.
    const emailEndpoint = 'https://example.com/api/send-email';

    this.http.post(emailEndpoint, payload).subscribe({
      next: () => {
        this.isSubmitted = true;
        this.isSuccess = true;
        this.contactForm.reset();
      },
      error: () => {
        this.isSubmitted = true;
        this.isSuccess = false;
        this.errorMessage = 'Error al enviar el mensaje. Por favor, intenta nuevamente más tarde.';
      }
    });
  }
}
