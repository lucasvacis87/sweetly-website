import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatBadgeModule } from '@angular/material/badge';
import { RouterModule } from '@angular/router';
import { CartService, CartItem } from '../services/cart.service';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatBadgeModule
  ],
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  isMenuOpen: boolean = false;
  isCartOpen: boolean = false;
  cartCount = 0;
  cartItems: CartItem[] = [];

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    // Suscribirse al observable para obtener la cuenta total
    this.cartService.cartCount$.subscribe(count => {
      this.cartCount = count;
    });
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu() {
    this.isMenuOpen = false;
  }

  toggleCart() {
    this.isCartOpen = !this.isCartOpen;
    if (this.isCartOpen) {
      this.loadCartItems();
    }
  }

  closeCart() {
    this.isCartOpen = false;
  }

  clearCart() {
    this.cartService.clearCart();
    this.loadCartItems();
  }

  // Se invoca automáticamente al abrir el mat-menu
  loadCartItems(): void {
    this.cartItems = this.cartService.getItems();
    console.log(this.cartItems);
  }

  // Calcular el total sumando cantidad * precio de cada item
  getCartTotal(): number {
    return this.cartItems.reduce((acc, item) => acc + (item.precio * item.quantity), 0);
  }
}
