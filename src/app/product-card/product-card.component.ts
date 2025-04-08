import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { PrecioPipe } from '../shared/precio.pipe';
import { ProductGalleryComponent } from '../product-gallery/product-gallery.component';
import { MatCardModule } from '@angular/material/card';
import { ProductOrSet, Set } from '../shared/models/product.model';

interface Product {
  id: number;
  name: string;
  description: string;
  precio: number;
  images: string[];
  size: string;
  selectedQuantity?: number;
  isPersonalized?: boolean;
  estimatedTime?: string;
  categoria?: string;
  unidades?: number;
  colors?: string[];
}

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [
  CommonModule,
    MatButtonModule,
    MatIconModule,
    RouterModule,
    ProductGalleryComponent,
    PrecioPipe,
    MatCardModule

  ],
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent {
  @Input() product!: Product;
  @Input() isPersonalized: boolean = false;
  @Input() isCombo: boolean = false;
  @Input() isSet: boolean = false;
  @Input() item!: ProductOrSet;
  @Input() type: 'normal' | 'custom' | 'set' | 'combo' = 'normal';



  @Output() addToCart = new EventEmitter<ProductOrSet>();
  @Output() openModal = new EventEmitter<void>();
  @Output() openCustomOrder = new EventEmitter<ProductOrSet>();
  @Output() increment = new EventEmitter<ProductOrSet>();
  @Output() decrement = new EventEmitter<ProductOrSet>();
  @Output() openCustom = new EventEmitter<Set>();
  @Output() openWhatsApp = new EventEmitter<void>();


  onAddToCart() {
    this.addToCart.emit(this.item);
  }

  onOpenCustomOrder() {
    this.openCustomOrder.emit(this.item);
  }

  onIncrement() {
    this.increment.emit(this.item);
  }

  onDecrement() {
    this.decrement.emit(this.item);
  }

}
