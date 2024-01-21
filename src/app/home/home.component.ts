import { Component, AfterViewInit } from '@angular/core';

declare var $: any; // Declare $ to use jQuery

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements AfterViewInit {
  images = [
    "./assets/images/cake1.jpg",
    "./assets/images/cup.jpg",
    "./assets/images/cake2.jpg",
  ];

  ngAfterViewInit(): void {
    // Initialize Bootstrap carousel after the view is initialized
    $('#cakeCarousel').carousel();
  }
}
