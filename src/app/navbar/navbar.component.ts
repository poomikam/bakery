// navbar.component.ts
import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  cartItemCount: number = 0;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.updateCartItemCount();
    this.cartService.cartItems$.subscribe(() => {
      this.updateCartItemCount();
    });
  }

  private updateCartItemCount(): void {
    const cartItems = this.cartService.getCartItems();
    this.cartItemCount = cartItems.length;
  }
}
