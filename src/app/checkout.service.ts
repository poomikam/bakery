// checkout.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CheckoutService {
  private apiUrl = 'http://localhost:3000/comments'; // Replace with your actual API endpoint

  constructor(private http: HttpClient) {}

  placeOrder(orderDetails: any): Observable<any> {
    return this.http.post(this.apiUrl, orderDetails);
  }
}
