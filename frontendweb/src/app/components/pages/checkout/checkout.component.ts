import { Component } from '@angular/core';
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";
import {CurrencyPipe, NgFor, NgIf} from "@angular/common";
import {MatTabsModule} from "@angular/material/tabs";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {RouterLink, RouterModule} from "@angular/router";
import {FormsModule} from "@angular/forms";
import {MatProgressBar} from "@angular/material/progress-bar";
import {MatDivider} from "@angular/material/divider";
import {MatIconModule} from "@angular/material/icon";
import {MatStepperModule} from "@angular/material/stepper";

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [MatCardModule,
    MatButtonModule, CurrencyPipe, NgFor,
    MatTabsModule, MatFormFieldModule, MatStepperModule,
    MatInputModule, RouterLink, FormsModule,
    MatProgressBar, MatDivider, NgIf,
    MatIconModule],
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.scss'
})
export class CheckoutComponent {

  cartItems = [
    { name: 'Item 1', price: 19.99, image: 'assets/guitar1.jpg', description: 'Description here' },
    { name: 'Item 2', price: 39.99, image: 'assets/guitar2.jpg', description: 'Description here' },
    { name: 'Item 1', price: 19.99, image: 'assets/guitar3.jpg', description: 'Description here' },
    { name: 'Item 2', price: 39.99, image: 'assets/guitar4.jpg', description: 'Description here' }
    ];

  address: string = "";
  country: string= "";
  city: string= "";
  postalCode: string= "";
  phoneNumber: string= "";
  loading: boolean = false;
  checkoutFailed: boolean = false;
  cardNumber: string ="";
  expirationDate: any = "";
  ccv: string = "";
  paymentFailed: boolean = false;
  constructor() {
  }

  processCheckout() {
    this.loading = true;
    // Here you would typically handle the form submission to your backend
    // For now, just simulate a server response
    setTimeout(() => {
      this.loading = false;
      // Assume something goes wrong
      this.checkoutFailed = true;
      this.paymentFailed = true;
    }, 2000);
  }

}
