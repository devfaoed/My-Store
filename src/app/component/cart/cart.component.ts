import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { productervice } from '../../services/product.service';
import { Product, productNumberr } from '../../model/Product';
import { CartProduct } from '../../model/cart_prooduct';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  product: Product[] = [];
  cartProduct: CartProduct[] = [];
  productNumberr: string[] = productNumberr;
  totalPrice: number = 0;

  constructor(private productervice: productervice, private route: Router) {}

  ngOnInit(): void {
    this.cartProduct = this.productervice.getCartProduct();
    this.calculateTotalPrice();
  }
  selectChange(id: number, event: any): void {
    const selectedOption =
      event.target.options[event.target.options.selectedIndex].value;
    const cartIdx = this.cartProduct.findIndex((cart) => cart.id === id);
    cartIdx != -1 && this.cartProduct.length > 0
      ? (this.cartProduct[cartIdx].option = selectedOption)
      : null;
    this.cartProduct.length > 0
      ? this.productervice.addToCart(this.cartProduct)
      : null;
    this.calculateTotalPrice();
  }
  removeCart(id: number): void {
    const cartIdx = this.cartProduct
      ? this.cartProduct.findIndex((cart) => cart.id === id)
      : -1;
    if (cartIdx != -1 && this.cartProduct.length > 0) {
      this.cartProduct.splice(cartIdx, 1);
      this.productervice.addToCart(this.cartProduct);
      this.calculateTotalPrice();
    }
  }
  calculateTotalPrice(): void {
    this.totalPrice = this.cartProduct.reduce((acc: number, val: any) => {
      return acc + val.price * Number(val.option);
    }, 0);
    this.totalPrice = Number(this.totalPrice.toFixed(2));
  }
  checkoutSuccess(firstName: string): void {
    this.productervice.clearCart();
    this.route.navigateByUrl(`success/${firstName}/${this.totalPrice}`);
  }
}
