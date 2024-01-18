// checkout.component.ts
import { Component } from '@angular/core';
import { CheckoutService } from '../checkout.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css'],
})
export class CheckoutComponent {
  orderDetails: any = {}; // Initialize orderDetails object
  orderPlaced = false;

  constructor(private checkoutService: CheckoutService, private router: Router) {}

  placeOrder(): void {
    this.checkoutService.placeOrder(this.orderDetails).subscribe(
      (response) => {
        console.log('Order placed successfully:', response);
        this.orderPlaced = true;
        // Optionally, you can reset the form or perform other actions upon successful order placement
      },
      (error) => {
        console.error('Error placing order:', error);
        // Handle error, e.g., display an error message
      }
    );
  }
}
