import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { ProductGalleryComponent } from '../product-gallery/product-gallery.component';
import { MatTabGroup, MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';
import { CartService } from '../services/cart.service';
import { ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { CustomSetDialogComponent } from '../custom-set-dialog/custom-set-dialog.component';


interface Product {
  id: number;
  name: string;
  description: string;
  precio: number;
  images: string[];
  selectedQuantity?: number;
  size: string;
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
    MatIconModule,
    MatTabGroup,
  ],
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent {

  @ViewChild('tabGroup') tabGroup!: MatTabGroup;

  constructor(private cartService: CartService, private route: ActivatedRoute, private dialog: MatDialog) {}

  ngOnInit(): void {
    // Inicializamos la cantidad seleccionada en 1 para cada producto y set
    this.products.forEach(p => p.selectedQuantity = 1);
    this.sets.forEach(s => s.selectedQuantity = 1);

    this.route.fragment.subscribe(fragment => {
      if (fragment === 'Sets Personalizados') {
      setTimeout(() => this.tabGroup.selectedIndex = 1, 0); // tab 2 = Sets
      } else if (fragment === 'Novedades') {
      setTimeout(() => this.tabGroup.selectedIndex = 2, 0); // tab 3 = Novedades
      } else {
      setTimeout(() => this.tabGroup.selectedIndex = 0, 0); // default = Productos
      }
    })
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

  formatPrecio(value: number): string {
    return value.toLocaleString('es-AR', {
      style: 'currency',
      currency: 'ARS',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    });
  }

  modalAbierto = false;

  openModal() {
    this.modalAbierto = true;
  }

  closeModal() {
    this.modalAbierto = false;
  }

  openCustomOrder(set: any) {
    this.dialog.open(CustomSetDialogComponent, {
      data: { name: set.name },
      width: '100%',
      maxWidth: '500px'
    });
  }

  products: Product[] = [
    {
      id: 1,
      name: 'Amigurumi Messi',
      description: 'Descripción del producto 1 - Messi con la bandaaaaa!!!!',
      precio: 50000,
      images: ['messi/messi-1.jpeg', 'messi/messi-2.jpeg', 'messi/messias.jpg'],
      size: 'Mediano'
    },
    {
      id: 3,
      name: 'Baby Yoda',
      description: 'La fuerza del crochet te acompaña a todos lados.',
      precio: 30000,
      images: ['babby-yoda/yoda-1.jpeg', 'babby-yoda/favorito-2.jpeg'],
      size: 'Mediano'
    },
    {
      id: 4,
      name: 'Conejito BTS',
      description: 'El conejito de mc en homenaje a BTS.',
      precio: 10000,
      images: ['BTS/bts-1.jpeg', 'BTS/bts-2.jpeg', 'BTS/bts-3.jpeg'],
      size: 'Mediano'
    },
    {
      id: 5,
      name: 'Bubu',
      description: 'Bubucita la panda viral de TikTok!',
      precio: 10000,
      images: ['bubu/bubu-1.jpeg', 'bubu/bubu-2.jpeg', 'bubu/bubu-4.jpeg', 'bubu/bubu-5.jpeg', 'bubu/bubu-6.jpeg'],
      size: 'Mediano'
    },
    {
      id: 6,
      name: 'Conejito Tierno',
      description: 'Conejito tierno de color que vos quieras!',
      precio: 10000,
      images: ['conejito/conejito-1.jpeg', 'conejito/conejito-2.jpeg', 'conejito/conejito-2.jpeg'],
      size: 'Peque'
    },
    {
      id: 7,
      name: 'Oso Escandaloso',
      description: 'Oso Escandaloso',
      precio: 10000,
      images: ['escandalosos/osos-1.jpeg', 'escandalosos/osos-2.jpeg'],
      size: 'Peque'
    },
    {
      id: 8,
      name: 'Vaquita Milky',
      description: 'La que nos da la leche del dulce de leche, y la manteca que siempre le pones al pan.',
      precio: 20000,
      images: ['vaquita/vaquita-1.jpeg','vaquita/vaca-2.jpeg','vaquita/vaquita-3.jpeg','vaquita/vaca-4.jpeg'],
      size: 'Mediano'
    },
    {
      id: 9,
      name: 'Muñeca Stacy Malibu',
      description: 'Una muñeca coqueta.',
      precio: 50000,
      images: ['muñeca/muñeca-1.jpeg','muñeca/muñeca-2.jpeg','muñeca/portada.jpeg'],
      size: 'Mediano'
    },

  ];

  sets: Set[] = [
    {
      id: 111,
      name: 'Bautismo',
      description: 'Set de Angelitos, incluye un Angel grande y angelitos para nene o nena a eleccion de cantidades.',
      precio: 50000,
      images: ['Sets/bautismo/angelitos.jpeg', 'Sets/bautismo/set-4.png'],
      unidades: 40
    },
    {
      id: 112,
      name: 'Baby Shower',
      description: 'Set de Animalitos a eleccion, contanos lo que buscas y cuantos necesitas. Incluye figura tamaño Grande y Peques.',
      precio: 20000,
      images: ['Sets/conejos/conejito.jpeg','Sets/conejos/set-6.jpeg'],
      unidades: 25
    },
    {
      id: 113,
      name: 'Grand Set Grand',
      description: 'Set de figuras grandes personalizas y a medida.',
      precio: 80000,
      images: ['Sets/set-1.png', 'Sets/set-2.png', 'Sets/set-3.png' ],
      unidades: 60
    }
  ];

  novedades: Product[] = [
    {
      id: 5,
      name: 'Bubu',
      description: 'Bubucita la panda viral de TikTok!',
      precio: 10000,
      images: ['bubu/bubu-1.jpeg', 'bubu/bubu-2.jpeg', 'bubu/bubu-4.jpeg', 'bubu/bubu-5.jpeg', 'bubu/bubu-6.jpeg'],
      size: 'Mediano'
    },
    {
      id: 6,
      name: 'Conejito Tierno',
      description: 'Conejito tierno de color que vos quieras!',
      precio: 10000,
      images: ['conejito/conejito-1.jpeg', 'conejito/conejito-2.jpeg', 'conejito/conejito-2.jpeg'],
      size: 'Peque'
    },
    {
      id: 7,
      name: 'Oso Escandaloso',
      description: 'Oso Escandaloso',
      precio: 10000,
      images: ['escandalosos/osos-1.jpeg', 'escandalosos/osos-2.jpeg'],
      size: 'Peque'
    },
  ];
}
