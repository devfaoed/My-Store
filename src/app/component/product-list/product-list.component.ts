import { Component, OnInit } from '@angular/core';
import { Product, productNumber } from '../../model/Product';
import { CartProduct } from '../../model/cart_prooduct';
import { productervice } from '../../services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  product: Product[] = [];
  productNumber: string[] = productNumber;

  constructor(private productervice: productervice) {}

  ngOnInit(): void {
    this.productervice.getProduct().subscribe((res) => {
      this.product = res;
    });
  }
  onSubmit(cartProduct: Product, event: any): boolean {
    let newCartProduct: CartProduct[] = [];
    let message: string = '';
    let isCartOptionExist: boolean = false;

    const selectedOption =
      event.target[0].options[event.target[0].options.selectedIndex].value;
    const cartProduct: CartProduct[] | [] = this.productervice.getCartProduct();

    const cartIdx = cartProduct.findIndex((cart) => cart.id === cartProduct.id);
    newCartProduct = cartProduct;

    if (cartIdx === -1 || cartProduct.length === 0) {
      newCartProduct.push(
        Object.assign(cartProduct, { option: selectedOption })
      );
      message = `New Item '${cartProduct.name}' added to cart`;
    } else {
      const option: string = newCartProduct[cartIdx].option;
      isCartOptionExist = selectedOption === option;

      if (isCartOptionExist) {
        message = `${option} Item(s) of '${cartProduct.name}' already exist in cart.`;
      } else {
        newCartProduct[cartIdx].id = cartProduct.id;
        newCartProduct[cartIdx].option = selectedOption;
        message = `${option} Item(s) of '${cartProduct.name}' already exist in cart. Will be updated to ${selectedOption}`;
      }
    }
    !isCartOptionExist ? this.productervice.addToCart(newCartProduct) : null;

    alert(message);

    this.printLocalData(); // for debugging
    return false;
  }
  printLocalData(): void {
    console.log(this.productervice.getCartProduct());
  }
}
