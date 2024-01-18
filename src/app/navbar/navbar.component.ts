// navbar.component.ts
import { Component } from '@angular/core';
import { CartService } from '../cart.service'; // Import CartService

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  constructor(private cartService: CartService) {}

  // Define the cartItemCount method to get the number of items in the cart
  //cartItemCount(): number {
    //return this.cartService.getCartItemCount();
  //}
}
