import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { ProductGalleryComponent } from '../product-gallery/product-gallery.component';
import { MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';
import { CartService } from '../services/cart.service';

interface Product {
  id: number;
  name: string;
  description: string;
  precio: number;
  images: string[];
  selectedQuantity?: number;
}

interface Set {
  id: number;
  name: string;
  description: string;
  precio: number;
  images: string[];
  unidades: number;
  selectedQuantity?: number;
}

@Component({
  selector: 'app-productos',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    RouterModule,
    ProductGalleryComponent,
    MatTabsModule,
    MatIconModule
  ],
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent {

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    // Inicializamos la cantidad seleccionada en 1 para cada producto y set
    this.products.forEach(p => p.selectedQuantity = 1);
    this.sets.forEach(s => s.selectedQuantity = 1);
  }

  // Botones +/–: modifican la cantidad local (solo en memoria, sin tocar el carrito)
  incrementLocal(item: Product | Set): void {
    if (item.selectedQuantity !== undefined) {
      item.selectedQuantity++;
    }
  }

  decrementLocal(item: Product | Set): void {
    if (item.selectedQuantity && item.selectedQuantity > 1) {
      item.selectedQuantity--;
    }
  }

  // Al hacer click en "Agregar al carrito"
  // Sumamos la cantidad local al carrito global
  addToCart(item: Product | Set): void {
    if (!item.selectedQuantity) {
      item.selectedQuantity = 1; // fallback
    }
    // Llamamos al servicio para AGREGAR o ACTUALIZAR la cantidad de este producto en el carrito
    this.cartService.addOrUpdateItem(item.id, item.name, item.precio, item.selectedQuantity, item.images[0]);

  }



  products: Product[] = [
    {
      id: 1,
      name: 'Amigurumi Messi',
      description: 'Descripción del producto 1 - Messi con la bandaaaaa!!!!',
      precio: 100,
      images: ['messi/messi-1.jpeg', 'messi/messi-2.jpeg', 'messi/messias.jpg'],
    },
    {
      id: 3,
      name: 'Producto 3',
      description: 'Descripción del producto 3',
      precio: 300,
      images: ['babby-yoda/yoda-1.jpeg', 'babby-yoda/favorito-2.jpeg']
    }
  ];

  sets: Set[] = [
    {
      id: 1523,
      name: 'Set 1',
      description: 'Descripción del set 1',
      precio: 1000,
      images: ['assets/set1.jpg'],
      unidades: 3
    },
    {
      id: 122,
      name: 'Set 2',
      description: 'Descripción del set 2',
      precio: 2000,
      images: ['assets/set2.jpg'],
      unidades: 5
    },
    {
      id: 53,
      name: 'Set 3',
      description: 'Descripción del set 3',
      precio: 3000,
      images: ['assets/set3.jpg'],
      unidades: 7
    }
  ];
}
