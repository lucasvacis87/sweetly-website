import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { ProductGalleryComponent } from '../product-gallery/product-gallery.component';
import { MatTabsModule } from '@angular/material/tabs';

interface Product {
  id: number;
  name: string;
  description: string;
  precio: number;
  images: string[];
}

interface Set {
  id: number;
  name: string;
  description: string;
  precio: number;
  images: string[];
  unidades: number;
}

@Component({
  selector: 'app-productos',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule, RouterModule, ProductGalleryComponent, MatTabsModule],
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent {

  addToCart(productId: number) {
    console.log(`Product with id ${productId} added to cart.`);
  }

  products: Product[] = [
    {
      id: 1,
      name: 'Amigurumi Messi',
      description: 'Descripción del producto 1 - Messi con la bandaaaaa!!!!',
      precio: 100,
      images: ['messi/messi-1.jpeg', 'messi/messi-2.jpeg', 'messi/messias.jpg']
    },
    {
      id: 1,
      name: 'Amigurumi Messi',
      description: 'Descripción del producto 1 - Messi con la bandaaaaa!!!!',
      precio: 100,
      images: ['messi/messi-1.jpeg', 'messi/messi-2.jpeg', 'messi/messias.jpg']
    },
    {
      id: 1,
      name: 'Amigurumi Messi',
      description: 'Descripción del producto 1 - Messi con la bandaaaaa!!!!',
      precio: 100,
      images: ['messi/messi-1.jpeg', 'messi/messi-2.jpeg', 'messi/messias.jpg']
    },
    {
      id: 1,
      name: 'Amigurumi Messi',
      description: 'Descripción del producto 1 - Messi con la bandaaaaa!!!!',
      precio: 100,
      images: ['messi/messi-1.jpeg', 'messi/messi-2.jpeg', 'messi/messias.jpg']
    },
    {
      id: 1,
      name: 'Amigurumi Messi',
      description: 'Descripción del producto 1 - Messi con la bandaaaaa!!!!',
      precio: 100,
      images: ['messi/messi-1.jpeg', 'messi/messi-2.jpeg', 'messi/messias.jpg']
    },
    {
      id: 1,
      name: 'Amigurumi Messi',
      description: 'Descripción del producto 1 - Messi con la bandaaaaa!!!!',
      precio: 100,
      images: ['messi/messi-1.jpeg', 'messi/messi-2.jpeg', 'messi/messias.jpg']
    },
    {
      id: 1,
      name: 'Amigurumi Messi',
      description: 'Descripción del producto 1 - Messi con la bandaaaaa!!!!',
      precio: 100,
      images: ['messi/messi-1.jpeg', 'messi/messi-2.jpeg', 'messi/messias.jpg']
    },
    {
      id: 1,
      name: 'Amigurumi Messi',
      description: 'Descripción del producto 1 - Messi con la bandaaaaa!!!!',
      precio: 100,
      images: ['messi/messi-1.jpeg', 'messi/messi-2.jpeg', 'messi/messias.jpg']
    },
    {
      id: 1,
      name: 'Amigurumi Messi',
      description: 'Descripción del producto 1 - Messi con la bandaaaaa!!!!',
      precio: 100,
      images: ['messi/messi-1.jpeg', 'messi/messi-2.jpeg', 'messi/messias.jpg']
    },
    {
      id: 1,
      name: 'Amigurumi Messi',
      description: 'Descripción del producto 1 - Messi con la bandaaaaa!!!!',
      precio: 100,
      images: ['messi/messi-1.jpeg', 'messi/messi-2.jpeg', 'messi/messias.jpg']
    },
    {
      id: 1,
      name: 'Amigurumi Messi',
      description: 'Descripción del producto 1 - Messi con la bandaaaaa!!!!',
      precio: 100,
      images: ['messi/messi-1.jpeg', 'messi/messi-2.jpeg', 'messi/messias.jpg']
    },
    {
      id: 1,
      name: 'Amigurumi Messi',
      description: 'Descripción del producto 1 - Messi con la bandaaaaa!!!!',
      precio: 100,
      images: ['messi/messi-1.jpeg', 'messi/messi-2.jpeg', 'messi/messias.jpg']
    },
    {
      id: 1,
      name: 'Amigurumi Messi',
      description: 'Descripción del producto 1 - Messi con la bandaaaaa!!!!',
      precio: 100,
      images: ['messi/messi-1.jpeg', 'messi/messi-2.jpeg', 'messi/messias.jpg']
    },
    {
      id: 1,
      name: 'Amigurumi Messi',
      description: 'Descripción del producto 1 - Messi con la bandaaaaa!!!!',
      precio: 100,
      images: ['messi/messi-1.jpeg', 'messi/messi-2.jpeg', 'messi/messias.jpg']
    },
    {
      id: 1,
      name: 'Amigurumi Messi',
      description: 'Descripción del producto 1 - Messi con la bandaaaaa!!!!',
      precio: 100,
      images: ['messi/messi-1.jpeg', 'messi/messi-2.jpeg', 'messi/messias.jpg']
    },
    {
      id: 1,
      name: 'Amigurumi Messi',
      description: 'Descripción del producto 1 - Messi con la bandaaaaa!!!!',
      precio: 100,
      images: ['messi/messi-1.jpeg', 'messi/messi-2.jpeg', 'messi/messias.jpg']
    },
    {
      id: 2,
      name: 'Producto 2',
      description: 'Descripción del producto 2',
      precio: 200,
      images: ['assets/product2.jpg']
    },
    {
      id: 3,
      name: 'Producto 3',
      description: 'Descripción del producto 3',
      precio: 300,
      images: ['assets/product3.jpg']
    }
  ];

  sets: Set[] = [
    {
      id: 1,
      name: 'Set 1',
      description: 'Descripción del set 1',
      precio: 1000,
      images: ['assets/set1.jpg'],
      unidades: 3
    },
    {
      id: 2,
      name: 'Set 2',
      description: 'Descripción del set 2',
      precio: 2000,
      images: ['assets/set2.jpg'],
      unidades: 5
    },
    {
      id: 3,
      name: 'Set 3',
      description: 'Descripción del set 3',
      precio: 3000,
      images: ['assets/set3.jpg'],
      unidades: 7
    }
  ];
}
