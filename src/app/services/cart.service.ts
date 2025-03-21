// cart.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface CartItem {
  id: number;
  name: string;
  precio: number;
  quantity: number;
}

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartItems: CartItem[] = [];
  private cartCountSubject = new BehaviorSubject<number>(0);
  cartCount$ = this.cartCountSubject.asObservable();

  constructor() {}

  // Agrega o actualiza la cantidad de un producto en el carrito
  addOrUpdateItem(id: number, name: string, precio: number, quantity: number) {
    const existing = this.cartItems.find(i => i.id === id);
    if (existing) {
      existing.quantity += quantity;
    } else {
      this.cartItems.push({ id, name, precio, quantity });
    }
    this.updateCount();
  }

  // Incrementa la cantidad en 1 para el producto con ID dado
  incrementQuantity(productId: number): void {
    const existingItem = this.cartItems.find(i => i.id === productId);
    if (existingItem) {
      existingItem.quantity += 1;
      this.updateCount();
    }
  }

  // Decrementa la cantidad en 1 (o quita el ítem si llega a 0)
  decrementQuantity(productId: number): void {
    const existingItem = this.cartItems.find(i => i.id === productId);
    if (existingItem) {
      existingItem.quantity -= 1;
      if (existingItem.quantity <= 0) {
        this.removeItem(productId);
      } else {
        this.updateCount();
      }
    }
  }

  // Elimina por completo un producto del carrito
  removeItem(productId: number): void {
    this.cartItems = this.cartItems.filter(i => i.id !== productId);
    this.updateCount();
  }

  // Devuelve todos los items en el carrito
  getItems(): CartItem[] {
    return this.cartItems;
  }

  clearCart(): void {
    this.cartItems = [];
    this.updateCount();
  }

  // Calcula la cantidad total de ítems
  private updateCount(): void {
    const totalQuantity = this.cartItems.reduce((acc, item) => acc + item.quantity, 0);
    this.cartCountSubject.next(totalQuantity);
  }
}
