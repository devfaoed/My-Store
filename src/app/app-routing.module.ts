import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductItemDetailComponent } from './component/product-item-detail/product-item-detail.component';
import { ProductListComponent } from './component/product-list/product-list.component';
import { CartComponent } from './component/cart/cart.component';
import { CheckoutSuccessComponent } from './component/checkout-success/checkout-success.component';

const routes: Routes = [
  { path: '', component: ProductListComponent },
  { path: 'order_details/:id', component: ProductItemDetailComponent },
  { path: 'order', component: CartComponent },
  {
    path: 'success/:firstName/:total',
    component: CheckoutSuccessComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
