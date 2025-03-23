import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatBadgeModule } from '@angular/material/badge';
import { RouterModule } from '@angular/router';
import { CartService, CartItem } from '../services/cart.service';
import { PrecioPipe } from '../shared/precio.pipe';

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
    MatBadgeModule,
    PrecioPipe
  ],
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  isMenuOpen = false;
  isCartOpen = false;
  showDropdown = false;
  cartItems: CartItem[] = [];
  cartCount = 0;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
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

  toggleDropdown() {
    this.showDropdown = !this.showDropdown;
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

  increment(item: CartItem) {
    this.cartService.incrementQuantity(item.id);
    this.loadCartItems();
  }

  decrement(item: CartItem) {
    this.cartService.decrementQuantity(item.id);
    this.loadCartItems();
  }

  removeItem(item: CartItem) {
    this.cartService.removeItem(item.id);
    this.loadCartItems();
  }

  loadCartItems(): void {
    this.cartItems = this.cartService.getItems();
  }

  getCartTotal(): number {
    return this.cartItems.reduce((acc, item) => acc + item.precio * item.quantity, 0);
  }
}
