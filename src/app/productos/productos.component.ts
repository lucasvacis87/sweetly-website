import { Component, inject, ViewChild } from '@angular/core';
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
import { PrecioPipe } from "../shared/precio.pipe";
import { AppComponent } from '../app.component';
import { ToastService } from '../shared/toast.service';


interface Product {
  id: number;
  name: string;
  description: string;
  precio: number;
  images: string[];
  selectedQuantity?: number;
  size: string;
  isPersonalized?: boolean;
}

interface Set {
  id: number;
  name: string;
  description: string;
  precio: number;
  images: string[];
  unidades: number;
  selectedQuantity?: number;
  estimatedTime?: string;
  colors?: string[];
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
    PrecioPipe
],
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent {

  @ViewChild('tabGroup') tabGroup!: MatTabGroup;

  constructor(private cartService: CartService, private route: ActivatedRoute, private dialog: MatDialog, private toastService: ToastService) {}

  modalAbierto = false;

  ngOnInit(): void {
    // Inicializamos la cantidad seleccionada en 1 para cada producto y set
    this.products.forEach(p => p.selectedQuantity = 1);
    this.sets.forEach(s => s.selectedQuantity = 1);
    this.combos.forEach(c => c.selectedQuantity = 1);


    this.route.fragment.subscribe(fragment => {
      if (fragment === 'Sets Personalizados') {
        this.tabGroup.selectedIndex = 1;
      } else if (fragment === 'Combos') {
        this.tabGroup.selectedIndex = 2;
      } else {
        this.tabGroup.selectedIndex = 0;
      }

      // Espera un poco y hace scroll al id si existe
      setTimeout(() => {
        const el = document.getElementById(fragment || '');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 200);
    });
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

  getWhatsAppLink(product: Product): string {
    const mensaje = `Hola! Me interesa personalizar un amigurumi: ${product.name}`;
    const telefono = '57206739'; // Reemplaza con el número de teléfono real
    return `https://wa.me/${telefono}?text=${encodeURIComponent(mensaje)}`;
  }

  // Al hacer click en "Agregar al carrito"
  // Sumamos la cantidad local al carrito global
  addToCart(item: Product | Set): void {
    if (!item.selectedQuantity) {
      item.selectedQuantity = 1; // fallback
    }
    // Llamamos al servicio para AGREGAR o ACTUALIZAR la cantidad de este producto en el carrito
    this.cartService.addOrUpdateItem(item.id, item.name, item.precio, item.selectedQuantity, item.images[0]);
    this.toastService.show('Producto agregado al carrito');
  }

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
      name: 'Messi Campeón',
      description: 'Amigurumi exclusivo del 10 más grande. Con su cinta, medalla y todo el aguante argentino.',
      precio: 18500,
      images: ['messi/messi.png',  'messi/messi.jpeg'],
      size: 'Mediano'
    },
    {
      id: 3,
      name: 'Maestro Yodita',
      description: 'El amigurumi que concentra toda la ternura y sabiduría galáctica. Perfecto para regalar.',
      precio: 15500,
      images: ['babby-yoda/yodi.jpg', 'babby-yoda/yoda-1.jpeg', 'babby-yoda/favorito-2.jpeg'],
      size: 'Mediano'
    },
    {
      id: 4,
      name: 'Conejito K-Pop',
      description: 'Inspirado en la ternura y el estilo coreano. Ideal para fans de BTS y cultura asiática.',
      precio: 11500,
      images: ['BTS/bts-4.png','BTS/bts-1.jpeg', 'BTS/bts-3.jpeg'],
      size: 'Mediano'
    },
    {
      id: 5,
      name: 'Bubu Panda',
      description: 'La panda viral de TikTok llegó en forma de amigurumi. Adorable, suave y única.',
      precio: 12500,
      images: ['bubu/bubu-1.jpeg', 'bubu/bubu-2.jpeg', 'bubu/bubu-4.jpeg', 'bubu/bubu-5.jpeg', 'bubu/bubu-6.jpeg'],
      size: 'Mediano'
    },
    {
      id: 52,
      name: 'Hedwig la Lechuza',
      description: 'La fiel compañera de Harry Potter. Ideal para fans de la saga y amantes de la magia.',
      precio: 15500,
      images: ['lechuza/hedwig-2.png' , 'lechuza/hedwig-3.png' , 'lechuza/hedwig-1.png'],
      size: 'Mediano'
    },
    {
      id: 6,
      name: 'Conejito Pastel',
      description: 'Elegí tu color preferido y recibí este conejito encantador, ideal para decorar o regalar.',
      precio: 9800,
      images: ['conejito/conejito-1.jpeg', 'conejito/conejito-2.jpeg'],
      size: 'Pequeño'
    },
    {
      id: 7,
      name: 'Osito Travieso',
      description: 'Pequeño, escandaloso y lleno de ternura. El osito que conquista con solo mirarlo.',
      precio: 9800,
      images: ['escandalosos/osos-1.jpeg', 'escandalosos/osos-2.jpeg'],
      size: 'Pequeño'
    },
    {
      id: 8,
      name: 'Vaquita Milky',
      description: 'Simpática, divertida y hecha a mano con amor. Tu vaquita favorita para decorar o abrazar.',
      precio: 14000,
      images: ['vaquita/vaquita-1.jpeg','vaquita/vaca-2.jpeg','vaquita/vaquita-3.jpeg','vaquita/vaca-4.jpeg'],
      size: 'Mediano'
    },
    {
      id: 9,
      name: 'Stacy de Primavera',
      description: 'Una muñeca coqueta con detalles florales. Hecha con hilos premium y muchos mimos.',
      precio: 18500,
      images: ['muñeca/muñeca-1.jpeg','muñeca/muñeca-2.jpeg','muñeca/portada.jpeg'],
      size: 'Mediano'
    },
    {
      id: 81,
      name: 'Encarga tu Amigurumi Potter',
      description: 'Contanos cual es tu personaje favorito de Harry Potter y lo haremos realidad.',
      precio: 30500,
      images: ['custom/HP.png'],
      size: 'Mediano',
      isPersonalized: true,
    },
    {
      id: 82,
      name: 'Ecarga tu Amigurumi Pokemón',
      description: 'Contanos cual es tu Pokémon favorito y lo haremos realidad en forma de amigurumi único.',
      precio: 30500,
      images: ['custom/Pokemon.png'],
      size: 'Mediano',
      isPersonalized: true,
    },
    {
      id: 83,
      name: 'Elegi tu superheroe Marvel o DC favorito',
      description: 'Contanos cual es tu superheroe favorito y lo haremos realidad en forma de amigurumi único.',
      precio: 30500,
      images: ['custom/marvel.png'],
      size: 'Mediano',
      isPersonalized: true,
    },
    {
      id: 84,
      name: 'Elegi tu personaje de Disney favorito',
      description: 'Contanos cual es tu personaje favorito de Disney y lo haremos realidad en forma de amigurumi único.',
      precio: 30500,
      images: ['custom/disney.png'],
      size: 'Mediano',
      isPersonalized: true
    },
    {
      id: 86,
      name: 'Encarga tu Amigurumi de Star Wars',
      description: 'Contanos cual es tu personaje favorito de Star Wars y lo haremos realidad en forma de amigurumi único.',
      precio: 30500,
      images: ['custom/Starwars.png'],
      size: 'Mediano',
      isPersonalized: true
    },
    {
      id: 86,
      name: 'Encarga tu Amigurumi de El Señor de los Anillos',
      description: 'Contanos cual es tu personaje favorito de El Señor de los Anillos y lo haremos realidad en forma de amigurumi único.',
      precio: 30500,
      images: ['custom/lotr.jpg'],
      size: 'Mediano',
      isPersonalized: true
    },
    {
      id: 86,
      name: 'Encarga tu Amigurumi de BTS',
      description: 'Contanos cual es tu personaje favorito de BTS y lo haremos realidad en forma de amigurumi único.',
      precio: 30500,
      images: ['custom/BTS.jpg'],
      size: 'Mediano',
      isPersonalized: true
    }
  ];


  sets: Set[] = [
    {
      id: 111,
      name: 'Set Angelitos de Luz',
      description: 'Incluye un ángel grande central y mini angelitos personalizados a elección. Ideal para bautismos y comuniones.',
      precio: 42000,
      images: ['Sets/bautismo/angelitos.jpeg', 'Sets/bautismo/set-4.png'],
      unidades: 15
    },
    {
      id: 112,
      name: 'Set Animalitos Baby Shower',
      description: 'Pack ideal para baby showers. Incluye figura grande + varios peques a elección.',
      precio: 38000,
      images: ['Sets/conejos/set-6.jpeg', 'Sets/conejos/conejito.jpeg'],
      unidades: 15
    },
    {
      id: 113,
      name: 'Grand Set Premium',
      description: 'El set más completo. Figuras grandes, únicas, hechas a medida según tu evento o historia.',
      precio: 62000,
      images: ['Sets/set-1.png', 'Sets/set-2.png', 'Sets/set-3.png' ],
      unidades: 30
    }
  ];

  combos: Set[] = [
    {
      id: 114,
      name: 'Combo Angelitos',
      description: 'Mini pack ideal para regalos o souvenir. Incluye 4 angelitos + 1 figura grande.',
      precio: 36000,
      images: ['Sets/set-3.png'],
      unidades: 15
    },
    {
      id: 115,
      name: 'Combo Conejitos',
      description: 'Tres conejitos tiernos en tonos pastel listos para regalar. Hechos 100% a mano.',
      precio: 28000,
      images: ['Sets/set-2.png'],
      unidades: 15
    },
    {
      id: 116,
      name: 'Combo Gran Fiesta',
      description: 'Combo especial para decorar mesas dulces, eventos o regalos múltiples.',
      precio: 49000,
      images: ['Sets/set-1.png' ],
      unidades: 6
    }
  ];

}
