import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from "@angular/router";
import { Subscription } from "rxjs";
import { ProductService } from "../../services/product-service.service";
import {HttpClientModule, HttpErrorResponse} from "@angular/common/http";
import { Product } from "../../interfaces/product";
import {MatDrawer, MatDrawerContainer, MatDrawerContent} from "@angular/material/sidenav";
import {MatGridListModule} from "@angular/material/grid-list";
import {CurrencyPipe, NgFor} from "@angular/common";
import {
  MatCard,
  MatCardActions,
  MatCardContent,
  MatCardFooter,
  MatCardHeader,
  MatCardImage, MatCardTitle
} from "@angular/material/card";
import {ProductsHeaderComponent} from "../home/components/products-header/products-header.component";
import {FiltersComponent} from "../home/components/filters/filters.component";
import {ProductComponent} from "../home/components/product/product.component";
import {HeaderComponent} from "../../header/header.component";
import {MatButton, MatIconButton} from "@angular/material/button";
import {MatIcon} from "@angular/material/icon";
import {ReviewComponent} from "./components/review/review.component";
import {Review} from "./interfaces/review";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatSelectModule} from "@angular/material/select";
import {MatInputModule} from "@angular/material/input";
import {MatDivider} from "@angular/material/divider";

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  standalone: true,
  providers: [ProductService],
  imports: [
    HttpClientModule,
    MatDrawerContainer,
    MatDrawer,
    MatDrawerContent,
    MatGridListModule,
    NgFor,
    MatCard,
    MatCardContent,
    MatCardImage,
    MatCardFooter,
    ProductsHeaderComponent,
    FiltersComponent,
    ProductComponent,
    HeaderComponent,
    CurrencyPipe,
    MatButton,
    MatCardActions,
    MatCardHeader,
    MatCardTitle,
    MatIcon,
    MatIconButton,
    ReviewComponent,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatDivider
  ],
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent implements OnInit, OnDestroy {
  parameters!: ParamMap;
  idProduct: string = '';
  foundProduct: Product;
  productReviews : Review[] = [{
    title: "Great Product",
    rating: 5,
    username: "JohnDoe",
    content: "This product exceeded my expectations. Highly recommended!"
  },
    {
      title: "Great Product",
      rating: 3,
      username: "JohnDoe",
      content: "This product exceeded my expectations. Highly recommended!"
    },
    {
      title: "Great Product",
      rating: 5,
      username: "JohnDoe",
      content: "This product exceeded my expectations. Highly recommended!"
    }];

  private routeSubscription: Subscription = new Subscription();

  constructor(private route: ActivatedRoute, public productService: ProductService) {
    this.foundProduct = {
      id: 0,
      name: "not found",
      price: 0,
      pictureUrl: "",
      isFavourite: false
    }
  }

  ngOnInit(): void {
    this.routeSubscription = this.route.queryParamMap.subscribe(params => {
      this.parameters = params;
      this.idProduct = params.get("id") || '';
      console.log(params);
      this.productService.findSpecific("/product_details?id=" + this.idProduct).subscribe(
        (response: Product) => {
          console.log(response);
          this.foundProduct = response;
        },
        (error: HttpErrorResponse) => {
          console.log(error);
        }
      )
    });
  }

  ngOnDestroy(): void {
    this.routeSubscription.unsubscribe();
  }
}
