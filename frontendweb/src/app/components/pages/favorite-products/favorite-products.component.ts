import { Component } from '@angular/core';
import {NgForOf} from "@angular/common";
import {ProductComponent} from "../home/components/product/product.component";
import {Product} from "../../interfaces/product";

@Component({
  selector: 'app-favorite-products',
  standalone: true,
  imports: [
    NgForOf,
    ProductComponent
  ],
  templateUrl: './favorite-products.component.html',
  styleUrl: './favorite-products.component.css'
})
export class FavoriteProductsComponent {
  products: Product[] = [
    {id: 11, name: "Product 1", price: 30, pictureUrl: "url", isFavourite: true},
    {id: 22, name: "Product 2", price: 32, pictureUrl: "url", isFavourite: true},
    {id: 33, name: "Product 3", price: 33, pictureUrl: "url", isFavourite: true},
    {id: 44, name: "Product 4", price: 31, pictureUrl: "url", isFavourite: true}
  ];
}
