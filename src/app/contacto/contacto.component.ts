import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import emailjs from 'emailjs-com';

@Component({
  selector: 'app-contacto',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule
  ],
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent {
  contactForm: FormGroup;
  isSubmitted = false;
  isSuccess = false;
  errorMessage = '';
  // Array para almacenar los archivos seleccionados
  selectedFiles: File[] = [];

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      nombre: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      mensaje: ['', Validators.required]
    });
  }

  onFileChange(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      // Convertimos el FileList a un array
      this.selectedFiles = Array.from(input.files);
    }
  }

  removeFile(index: number): void {
    this.selectedFiles.splice(index, 1);
  }

  // Función para convertir un archivo a Base64
  convertFileToBase64(file: File): Promise<string> {
    return new Promise<string>((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = error => reject(error);
    });
  }

  async onSubmit(): Promise<void> {
    if (this.contactForm.invalid) return;

    const formData = this.contactForm.value;

    // Parámetros para la plantilla de EmailJS
    const templateParams: any = {
      nombre: formData.nombre,
      email: formData.email,
      mensaje: formData.mensaje,
      to_email: 'lili.amigurumis64@gmail.com'
    };

    // Si hay archivos seleccionados, convertirlos a Base64
    if (this.selectedFiles.length) {
      try {
        // Convertimos todos los archivos y los almacenamos en un array
        const attachments = await Promise.all(
          this.selectedFiles.map(file => this.convertFileToBase64(file))
        );
        // Se envían como JSON string; en la plantilla de EmailJS deberás tratar la variable "attachments"
        templateParams.attachments = JSON.stringify(attachments);
      } catch (error) {
        console.error('Error al convertir archivos:', error);
        this.errorMessage = 'Error al procesar los archivos adjuntos.';
        this.isSubmitted = true;
        this.isSuccess = false;
        return;
      }
    }

    emailjs
      .send('service_wqgx6nc', 'template_r15iyc3', templateParams, '8cJDAx6AlZY6tJMrH')
      .then(
        (result) => {
          console.log('Correo enviado!', result.status, result.text);
          this.isSubmitted = true;
          this.isSuccess = true;
          // Reinicia el formulario y elimina errores residuales
          this.contactForm.reset();
          Object.keys(this.contactForm.controls).forEach(key => {
            this.contactForm.get(key)?.setErrors(null);
          });
          this.contactForm.markAsPristine();
          this.contactForm.markAsUntouched();
          // Limpiar archivos seleccionados
          this.selectedFiles = [];
        },
        (error) => {
          console.error('Error al enviar el correo: ', error);
          this.isSubmitted = true;
          this.isSuccess = false;
          this.errorMessage = 'Error al enviar el mensaje. Por favor, intenta nuevamente.';
        }
      );
  }
}
