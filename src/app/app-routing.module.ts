import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsComponent } from './shop/products/products.component';
import { ProductDetailsComponent } from './shop/product-details/product-details.component';
import { CartComponent } from './shop/cart/cart.component';
import { PaymentsComponent } from './shop/payments/payments.component';
import { TrackOrderComponent } from './shop/track-order/track-order.component';
import { AuthenticationComponent } from './authentication/authentication.component';
import { AccountComponent } from './account/account.component';
import { FaqComponent } from './faq/faq.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';




const routes: Routes = [
  {
    path : '',
    component : HomeComponent,
  },
  {
    path : 'home',
    component : HomeComponent,
  },
  {
    path : 'shop',
    component : ProductsComponent,
  },
  {
    path : 'auth',
    component : AuthenticationComponent
  },
  {
    path : 'cart',
    component : CartComponent
  },
  {
    path : 'track-order',
    component : TrackOrderComponent
  },
  {
    path : 'payments',
    component : PaymentsComponent
  },
  {
    path : 'account',
    component : AccountComponent
  },
  {
    path : 'faq',
    component : FaqComponent
  },
  {
    path : 'contact',
    component : ContactComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const PageRoutes = [
  AuthenticationComponent,
  AccountComponent,
  CartComponent,
  ContactComponent,
  FaqComponent,
  ProductsComponent,
  PaymentsComponent,
  ProductDetailsComponent,
  HomeComponent,
  TrackOrderComponent,

]

