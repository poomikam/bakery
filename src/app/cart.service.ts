// cart.service.ts

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartKey = 'myCart';

  private cartItems: any[] = this.getCartItemsFromLocalStorage();

  getCartItems(): any[] {
    return this.cartItems;
  }

  addItem(item: any): void {
    this.cartItems.push(item);
    this.updateLocalStorage();
  }

  removeItem(item: any): void {
    const index = this.cartItems.indexOf(item);
    if (index !== -1) {
      this.cartItems.splice(index, 1);
      this.updateLocalStorage();
    }
  }

  clearCart(): void {
    this.cartItems = [];
    this.updateLocalStorage();
  }

  private getCartItemsFromLocalStorage(): any[] {
    const cartItemsString = localStorage.getItem(this.cartKey);
    return cartItemsString ? JSON.parse(cartItemsString) : [];
  }

  private updateLocalStorage(): void {
    localStorage.setItem(this.cartKey, JSON.stringify(this.cartItems));
  }

  addToCart(item: any): void {
    this.addItem(item);
  }
}
