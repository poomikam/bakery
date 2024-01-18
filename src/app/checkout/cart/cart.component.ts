// cart.component.ts
import { Component } from '@angular/core';
import { CartService } from 'src/app/cart.service';
import { Router } from '@angular/router';
import { OrderService } from 'src/app/order.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent {
  cartItems = this.cartService.getCartItems();

  constructor(
    private cartService: CartService,
    private orderService: OrderService,
    private router: Router
  ) {}

  getCartItemCount(): number {
    return this.cartItems.length;
  }

  removeItem(item: any): void {
    this.cartService.removeItem(item);
    this.cartItems = this.cartService.getCartItems();
  }

  clearCart(): void {
    this.cartService.clearCart();
    this.cartItems = this.cartService.getCartItems();
  }

  getTotalPrice(): number {
    return this.cartItems.reduce((total, item) => total + item.totalPrice, 0);
  }

  openCheckoutPage(): void {
    const orderDetails = {
      items: this.cartItems,
      total: this.getTotalPrice(),
    };

    this.orderService.placeOrder(orderDetails).subscribe(
      (response) => {
        console.log('Order placed successfully:', response);
        this.cartService.clearCart();
        this.router.navigate(['/checkout'], { state: { orderId: response.orderId } });
      },
      (error) => {
        console.error('Error placing order:', error);
        // Handle error, e.g., display an error message
      }
    );
  }
}
