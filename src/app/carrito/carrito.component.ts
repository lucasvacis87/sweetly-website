import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService, CartItem } from '../services/cart.service';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { PrecioPipe } from "../shared/precio.pipe";


@Component({
  selector: 'app-carrito',
  standalone: true,
  imports: [CommonModule, MatIconModule, MatButtonModule, RouterModule, PrecioPipe],
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CartPageComponent implements OnInit {
  cartItems: CartItem[] = [];

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.cartItems = this.cartService.getItems();
  }

  increment(item: CartItem) {
    this.cartService.incrementQuantity(item.id);
    this.refresh();
  }

  decrement(item: CartItem) {
    this.cartService.decrementQuantity(item.id);
    this.refresh();
  }

  remove(item: CartItem) {
    this.cartService.removeItem(item.id);
    this.refresh();
  }

  refresh() {
    this.cartItems = this.cartService.getItems();
  }

  getTotal(): number {
    return this.cartItems.reduce((acc, val) => acc + val.precio * val.quantity, 0);
  }
}
