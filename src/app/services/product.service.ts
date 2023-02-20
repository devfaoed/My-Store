import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { Product } from '../model/Product';
import { CartProduct } from '../model/cart_prooduct';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  myStorage = window.localStorage;

  constructor(private http: HttpClient) { }

  getProduct(): Observable<Product[]>{
    return this.http.get<Product[]>('http://localhost:4200/assets/data.json');
  }
  addToCart(product: CartProduct[]): void{
    this.myStorage.setItem('cart', JSON.stringify(product));
  }
  getCartProduct(): CartProduct[] | []{
    const getProduct = this.myStorage.getItem('cart')
    return getProduct? JSON.parse(getProduct): [];
  }
  clearCart(): void{
    this.myStorage.clear();
  }
  
}
