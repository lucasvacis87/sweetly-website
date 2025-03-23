import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-custom-set-dialog',
  imports: [FormsModule, MatButtonModule, ReactiveFormsModule],
templateUrl: './custom-set-dialog.component.html',
  styleUrl: './custom-set-dialog.component.css'
})
export class CustomSetDialogComponent {

  cantidad = 1;
  tipoEvento = '';
  mensaje = '';

  constructor(
    public dialogRef: MatDialogRef<CustomSetDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { name: string }
  ) {}

  enviarPedido() {
    const resumen = `Hola! Quiero personalizar un set "${this.data.name}".
    Cantidad: ${this.cantidad}
    Evento: ${this.tipoEvento}
    Mensaje: ${this.mensaje}`;

    const whatsappUrl = `https://wa.me/5491157206739?text=${encodeURIComponent(resumen)}`;
    window.open(whatsappUrl, '_blank');
    this.dialogRef.close();
  }

}
