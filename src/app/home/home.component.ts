import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ContactoComponent } from "../contacto/contacto.component";
import { RouterModule } from '@angular/router';
import { HomeGalleryComponent } from "../home-gallery/home-gallery.component";


@Component({
  selector: 'app-home',
  imports: [
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    CommonModule,
    ContactoComponent,
    RouterModule,
    HomeGalleryComponent
],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  contactForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      nombre: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      mensaje: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.contactForm.valid) {
      // Lógica para enviar el formulario (HTTP, servicio, etc.)
      console.log(this.contactForm.value);
      alert('¡Formulario enviado!');
    }
  }

}
