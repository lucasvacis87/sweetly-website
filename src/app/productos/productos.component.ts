import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { ProductGalleryComponent } from '../product-gallery/product-gallery.component';

@Component({
  selector: 'app-productos',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule, RouterModule, ProductGalleryComponent],
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent {
  products = [
    {
      id: 1,
      name: 'Amigurumi Tacky',
      description: 'Un diseño lindo y colorido que aporta diversión a cualquier espacio.',
      images: ['favorito-1.jpeg'] // Agrega la cantidad de imágenes necesarias
    },
    {
      id: 2,
      name: 'Amigurumi Niña',
      description: 'Diseño encantador, ideal tanto para niñas como para coleccionistas.',
      images: ['portada.jpeg', 'portada-alt.jpeg']
    },
    {
      id: 3,
      name: 'Amigurumi Baby Yoda',
      description: 'La versión adorable de Baby Yoda en forma de amigurumi para los fans.',
      images: ['favorito-2.jpeg', 'favorito-2-alt.jpeg']
    }
  ];

  sets = [
    {
      id: 1,
      name: 'Set de Amigurumis',
      description: 'Un set de 3 amigurumis que incluye a Tacky, Niña y Baby Yoda.',
      images: ['favorito-1.jpeg', 'portada.jpeg', 'favorito-2.jpeg'],
      unidades: 25,
      precio: 30000
    }
  ];
}
