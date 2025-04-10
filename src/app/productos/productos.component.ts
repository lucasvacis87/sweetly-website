import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, ActivatedRoute } from '@angular/router';
import { MatTabGroup, MatTabsModule } from '@angular/material/tabs';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule } from '@angular/forms';

import { ToastService } from '../shared/toast.service';
import { MatDialog } from '@angular/material/dialog';
import { CartService } from '../services/cart.service';

import { CustomSetDialogComponent } from '../custom-set-dialog/custom-set-dialog.component';
import { ProductCardComponent } from '../product-card/product-card.component';
import { Product, Set } from '../shared/models/product.model';
import { MatButtonModule } from '@angular/material/button';


@Component({
  selector: 'app-productos',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MatTabsModule,
    MatSelectModule,
    FormsModule,
    ProductCardComponent,
    MatButtonModule
  ],
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent {
  modalAbierto = false;
  activeTab = 'amigurumis';
  categoriaSeleccionada = '';
  categorias = ['Disney', 'Pokémon', 'Harry Potter', 'Animales'];
  @ViewChild('tabGroup') tabGroup!: MatTabGroup;

  constructor(
    private cartService: CartService,
    private route: ActivatedRoute,
    private dialog: MatDialog,
    private toastService: ToastService
  ) {}

  ngAfterViewInit(): void {
    this.route.fragment.subscribe(fragment => {
      const tab = this.mapFragmentToTab(fragment ?? '');
      const index = this.getTabIndexByLabel(tab);

      // Esperamos un poco para que el mat-tab-group esté listo
      setTimeout(() => {
        if (this.tabGroup && index >= 0) {
          this.tabGroup.selectedIndex = index;

          const el = document.getElementById(fragment ?? '');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }
      }, 200);
    });
  }

  ngOnInit(): void {
    this.products.forEach(p => p.selectedQuantity = 1);
    this.personalized.forEach(p => p.selectedQuantity = 1);
    this.sets.forEach(s => s.selectedQuantity = 1);
    this.combos.forEach(c => c.selectedQuantity = 1);
  }

  getTabIndexByLabel(label: string): number {
    const labels = ['Amigurumis', 'Personalizados', 'Sets', 'Combos'];
    return labels.findIndex(l => l.toLowerCase() === label.toLowerCase());
  }

  setActiveTab(tab: string) {
    this.activeTab = tab;
    this.categoriaSeleccionada = '';
  }

  mapFragmentToTab(fragment: string): string {
    switch (fragment.toLowerCase()) {
      case 'amigurumis':
        return 'Amigurumis';
      case 'amigurumis personalizados':
      case 'personalizados':
        return 'Personalizados';
      case 'sets personalizados':
      case 'sets':
        return 'Sets';
      case 'combos':
        return 'Combos';
      default:
        return 'Amigurumis';
    }
  }

  openModal() {
    this.modalAbierto = true;
  }

  closeModal() {
    this.modalAbierto = false;
  }

  openCustomOrder(set: Set) {
    this.dialog.open(CustomSetDialogComponent, {
      data: { name: set.name },
      width: '100%',
      maxWidth: '500px'
    });
  }

  addToCart(item: Product | Set): void {
    if (!item.selectedQuantity) item.selectedQuantity = 1;
    this.cartService.addOrUpdateItem(
      item.id,
      item.name,
      item.precio,
      item.selectedQuantity,
      item.images[0]
    );
    this.toastService.show('Producto agregado al carrito');
  }

  incrementLocal(item: Product | Set) {
    if (item.selectedQuantity !== undefined) {
      item.selectedQuantity++;
    }
  }

  decrementLocal(item: Product | Set) {
    if (item.selectedQuantity && item.selectedQuantity > 1) {
      item.selectedQuantity--;
    }
  }

  getWhatsAppLink(product: Product): string {
    const mensaje = `Hola! Me interesa personalizar un amigurumi: ${product.name}`;
    const telefono = '5491157206739';
    return `https://wa.me/${telefono}?text=${encodeURIComponent(mensaje)}`;
  }

  filteredProducts() {
    return this.products.filter(p => !this.categoriaSeleccionada || p.categoria === this.categoriaSeleccionada);
  }

  filteredPersonalizados() {
    return this.personalized.filter(p => !this.categoriaSeleccionada || p.categoria === this.categoriaSeleccionada);
  }

  filteredSets() {
    return this.sets.filter(p => !this.categoriaSeleccionada || p.categoria === this.categoriaSeleccionada);
  }

  filteredCombos() {
    return this.combos.filter(p => !this.categoriaSeleccionada || p.categoria === this.categoriaSeleccionada);
  }

  infoCompraAbierto = false;

  openInfoCompra() {
    this.infoCompraAbierto = true;
  }

  closeInfoCompra() {
    this.infoCompraAbierto = false;
  }


  // tus productos existentes siguen igual...
  products: Product[] = [

    {
      id: 1,
      name: 'Messi Campeón',
      description: 'Amigurumi exclusivo del 10 más grande. Con su cinta, medalla y todo el aguante argentino.',
      precio: 25500,
      images: ['messi/messi.png', 'messi/messi.jpeg'],
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
      id: 533,
      name: 'Charmander',
      description: 'El Pokémon inicial de fuego. Ideal para fans de la saga y amantes de los Pokémon.',
      precio: 30000,
      images: ['charmander/image1.jpg', 'charmander/image (2).jpg', 'charmander/image.jpg'],
      size: 'Mediano'
    },
    {
      id: 532,
      name: 'Harry Potter',
      description: 'El niño que vivió. Amigurumi inspirado en el personaje más querido de la saga.',
      precio: 18500,
      images: ['harry/harry3.jpg', 'harry/harry-1.jpeg'],
      size: 'Mediano'
    },
    {
      id: 3,
      name: 'Maestro Yodita',
      description: 'El amigurumi que concentra toda la ternura y sabiduría galáctica. Perfecto para regalar.',
      precio: 30000,
      images: ['babby-yoda/yodi.jpg', 'babby-yoda/yoda-1.jpeg', 'babby-yoda/favorito-2.jpeg'],
      size: 'Mediano'
    },
    {
      id: 4,
      name: 'Conejito K-Pop',
      description: 'Inspirado en la ternura y el estilo coreano. Ideal para fans de BTS y cultura asiática.',
      precio: 11500,
      images: ['BTS/bts-4.png', 'BTS/bts-1.jpeg', 'BTS/bts-3.jpeg'],
      size: 'Mediano'
    },
    {
      id: 52,
      name: 'Hedwig la Lechuza',
      description: 'La fiel compañera de Harry Potter. Ideal para fans de la saga y amantes de la magia.',
      precio: 15500,
      images: ['lechuza/hedwig-2.png', 'lechuza/hedwig-3.png'],
      size: 'Mediano'
    },
    {
      id: 9,
      name: 'Stacy de Primavera',
      description: 'Una muñeca coqueta con detalles florales. Hecha con hilos premium y muchos mimos.',
      precio: 18500,
      images: ['muñeca/muñeca-1.jpeg', 'muñeca/muñeca-2.jpeg', 'muñeca/portada.jpeg'],
      size: 'Mediano'
    },
    {
      id: 8,
      name: 'Vaquita Milky',
      description: 'Simpática, divertida y hecha a mano con amor. Tu vaquita favorita para decorar o abrazar.',
      precio: 14000,
      images: ['vaquita/vaquita-1.jpeg', 'vaquita/vaca-2.jpeg', 'vaquita/vaquita-3.jpeg', 'vaquita/vaca-4.jpeg'],
      size: 'Mediano'
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
      id: 6,
      name: 'Conejito Pastel',
      description: 'Elegí tu color preferido y recibí este conejito encantador, ideal para decorar o regalar.',
      precio: 9800,
      images: ['conejito/conejito-1.jpeg', 'conejito/conejito-2.jpeg'],
      size: 'Pequeño'
    }

  ];

  personalized: Product[] = [
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
    },

  ];


  sets: Set[] = [
    {
      id: 111,
      name: 'Set Angelitos de Luz',
      description: 'Incluye un ángel grande central + mini angelitos personalizados a elección + cada uno con su tarjeta personalizada del evento.',
      precio: 42000,
      images: ['Sets/bautismo/angelitos.jpeg'],
      unidades: 15
    },
    {
      id: 112,
      name: 'Set Animalitos Baby Shower',
      description: 'Pack ideal para baby showers. Incluye figura grande + varios peques a elección + cada uno con su tarjeta personalizada del evento.',
      precio: 38000,
      images: ['Sets/conejos/conejitos-1.png', 'Sets/conejos/conejitos.png'],
      unidades: 15
    },

  ];

  combos: Set[] = [
    {
      id: 114,
      name: 'Proximamente Combo de Amigurumis',
      description: 'Combo de amigurumis a elección. Incluye 1 figura grande + 2 figuras pequeñas',
      precio: 0,
      images: ['Sets/set-3.png'],
      unidades: 15
    },

  ];
}
