import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  images = [
    "./assets/images/cake1.jpg",
    "./assets/images/cup.jpg",
    "./assets/images/cake2.jpg",
  ];
}
