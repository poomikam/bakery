// cart.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartKey = 'myCart';

  private cartItemsSubject: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);
  public cartItems$: Observable<any[]> = this.cartItemsSubject.asObservable();

  constructor() {
    // Initialize cartItems from local storage
    this.cartItemsSubject.next(this.getCartItemsFromLocalStorage());
  }

  getCartItems(): any[] {
    return this.cartItemsSubject.value;
  }

  addItem(item: any): void {
    this.cartItemsSubject.next([...this.cartItemsSubject.value, item]);
    this.updateLocalStorage();
  }

  removeItem(item: any): void {
    const updatedItems = this.cartItemsSubject.value.filter(cartItem => cartItem !== item);
    this.cartItemsSubject.next(updatedItems);
    this.updateLocalStorage();
  }

  clearCart(): void {
    this.cartItemsSubject.next([]);
    this.updateLocalStorage();
  }

  private getCartItemsFromLocalStorage(): any[] {
    const cartItemsString = localStorage.getItem(this.cartKey);
    return cartItemsString ? JSON.parse(cartItemsString) : [];
  }

  private updateLocalStorage(): void {
    localStorage.setItem(this.cartKey, JSON.stringify(this.cartItemsSubject.value));
  }

  addToCart(item: any): void {
    this.addItem(item);
  }
}
