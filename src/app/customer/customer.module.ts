import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BuyerDashboardComponent } from './buyer/buyer-dashboard/buyer-dashboard.component';
import { CheckoutComponent } from './buyer/checkout/checkout.component';
import { SellerDashboardComponent } from './seller/seller-dashboard/seller-dashboard.component';
import { SigninSignupComponent } from './signin-signup/signin-signup.component';



@NgModule({
  declarations: [
    BuyerDashboardComponent,
    CheckoutComponent,
    SellerDashboardComponent,
    SigninSignupComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CustomerModule { }
