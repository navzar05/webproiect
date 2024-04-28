import { Component, Input} from '@angular/core';
import {MatCardImage, MatCardModule} from "@angular/material/card";
import {MatButton, MatIconButton} from "@angular/material/button";
import {MatDivider} from "@angular/material/divider";
import {MatIcon} from "@angular/material/icon";
import {CurrencyPipe, NgIf, NgOptimizedImage} from "@angular/common";
import {Router, RouterLink, RouterModule} from "@angular/router";
import {GuitarSubtype, GuitarType, Manufacturer} from "../../../../interfaces/product";

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [
    MatCardModule,
    MatButton,
    MatDivider,
    MatIcon,
    CurrencyPipe,
    MatCardImage,
    NgOptimizedImage,
    MatIconButton,
    RouterModule,
    NgIf
  ],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent {

  @Input() id: number = 0;
  @Input() name: string = '';
  @Input() price: number = 0;
  @Input() pictureUrl: string = ''; // Changed from url to pictureUrl to match interface
  @Input() isFavourite: boolean = false;
  @Input() manufacturer: string = "";
  @Input() type: string = "";
  @Input() subtype: string = "";


  constructor(private router: Router) {
    this.id = 0;
    this.name = '';
    this.price = 0;
    this.pictureUrl = ';';
    this.isFavourite = false;
  }
  navigateToProductDetails(id: number) {
    this.router.navigate(['/product_details'], { queryParams: { id: id } });
  }

  toggleFavourite() {
    this.isFavourite = !this.isFavourite;
  }
}
