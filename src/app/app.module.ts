import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './component/product-list/product-list.component';
import { HeaderComponent } from './component/header/header.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ProductItemDetailComponent } from './component/product-item-detail/product-item-detail.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { CartComponent } from './component/cart/cart.component';
import { CreateFormComponent } from './component/create-form/create-form.component';
import { CheckoutSuccessComponent } from './component/checkout-success/checkout-success.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    HeaderComponent,
    ProductItemDetailComponent,
    NavbarComponent,
    CartComponent,
    CreateFormComponent,
    CheckoutSuccessComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FlexLayoutModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
