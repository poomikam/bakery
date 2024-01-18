// our.component.ts

import { Component } from '@angular/core';
import { ModalComponent } from '../modal/modal.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-our',
  templateUrl: './our.component.html',
  styleUrls: ['./our.component.css']
})
export class OurComponent {
  cakes = [
    { name: 'Chocolate Cake', image: 'assets/images/product1.webp', description: 'A rich and indulgent chocolate cake.' },
    { name: 'Vanilla Cake', image: 'assets/images/product2.webp', description: 'A classic vanilla-flavored cake.' },
    { name: 'Strawberry Shortcake', image: 'assets/images/product3.webp', description: 'Layers of sponge cake, strawberries, and cream.' },
    { name: 'Red Velvet Cake', image: 'assets/images/product4.webp', description: 'A moist and velvety red-colored cake.' },
    { name: 'Carrot Cake', image: 'assets/images/product5.webp', description: 'A spiced cake with grated carrots and cream cheese frosting.' },
    { name: 'Lemon Blueberry Cake', image: 'assets/images/product6.webp', description: 'A refreshing cake with lemon and blueberry flavors.' },
    { name: 'Coconut Cake', image: 'assets/images/product8.webp', description: 'A tropical cake with coconut flakes.' },
    { name: 'Coffee Cake', image: 'assets/images/product9.webp', description: 'Perfect for coffee lovers, infused with coffee flavor.' },
    { name: 'Rainbow Cake', image: 'assets/images/product10.webp', description: 'Layers of colorful cake for a festive look.' },
    { name: 'Pineapple Upside-Down Cake', image: 'assets/images/product13.webp', description: 'Caramelized pineapple topping on a moist cake.' },
    { name: 'Mocha Cake', image: 'assets/images/product15.webp', description: 'Combines chocolate and coffee flavors.' },
    { name: 'Oreo Cheesecake', image: 'assets/images/product17.webp', description: 'Creamy cheesecake with crushed Oreo crust.' }
  ];

  constructor(public dialog: MatDialog) {}

  openCakeModal(cake: any): void {
    const dialogRef = this.dialog.open(ModalComponent, {
    
      data: { cake }
    });
  }
}
