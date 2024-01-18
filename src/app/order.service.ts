// order.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private apiUrl = 'http://localhost:3000/profile'; // Replace with your actual API endpoint

  constructor(private http: HttpClient) {}

  placeOrder(orderDetails: any): Observable<any> {
    return this.http.post(this.apiUrl, orderDetails);
  }
}
