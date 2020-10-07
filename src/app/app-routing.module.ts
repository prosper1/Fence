import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule, ActivatedRoute } from '@angular/router';
import { FormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
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
import { AuthGuard } from './_services/auth.guard';


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
    path : 'product-details/:id',
    component : ProductDetailsComponent,
    canActivate: [AuthGuard],
  },
  {
    path : 'auth',
    component : AuthenticationComponent
  },
  {
    path : 'cart',
    component : CartComponent,
    canActivate: [AuthGuard]
  },
  {
    path : 'track-order',
    component : TrackOrderComponent,
    canActivate: [AuthGuard],
  },
  {
    path : 'payments',
    component : PaymentsComponent,
    canActivate: [AuthGuard],
  },
  {
    path : 'account',
    component : AccountComponent,
    canActivate: [AuthGuard]
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
  imports: [
    RouterModule.forRoot(routes),
    FormsModule,
  ],
  exports: [RouterModule],
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

];

