// modal.component.ts

import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent {
  selectedWeight: number = 1; // Default value is 1 kg
  calculatedPrice: number = 800; // Property to store the calculated price

  constructor(
    public dialogRef: MatDialogRef<ModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private cartService: CartService
  ) {}

  calculatePrice(basePrice: number, weight: number): number {
    // Set the price for 0.5 kg to $400
    if (weight === 0.5) {
      return 400;
    }

    return 800 * weight;
  }

  updateCalculatedPrice(cake: any): void {
    // Update the calculated price when the selected weight changes
    this.calculatedPrice = this.calculatePrice(cake.price, this.selectedWeight);
  }

  addToCart(cake: any, weight: number): void {
    const totalPrice = this.calculatePrice(cake.price, weight);
    const cartItem = { ...cake, weight, totalPrice }; // Add weight and totalPrice to the cart item
    this.cartService.addToCart(cartItem);
    this.dialogRef.close();
  }

  closeModal(): void {
    this.dialogRef.close();
  }
}
