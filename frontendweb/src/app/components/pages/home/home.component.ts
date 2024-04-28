import {Component, OnInit} from '@angular/core';
import {MatDrawer, MatDrawerContainer, MatDrawerContent} from "@angular/material/sidenav";
import {ProductsHeaderComponent} from "./components/products-header/products-header.component";
import {FiltersComponent} from "./components/filters/filters.component";
import {MatGridListModule} from "@angular/material/grid-list";
import {ProductComponent} from "./components/product/product.component";
import {NgFor} from "@angular/common";
import {MatCard, MatCardContent, MatCardFooter, MatCardImage} from "@angular/material/card";
import {HeaderComponent} from "../../header/header.component";
import {ProductService} from "../../services/product-service.service";
import {HttpClientModule, HttpErrorResponse} from "@angular/common/http";
import {Product} from "../../interfaces/product";
import {MatPaginatorModule, PageEvent} from "@angular/material/paginator";

@Component({
  selector: 'app-home',
  standalone: true,
  providers:[
    ProductService
  ],
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
    MatPaginatorModule
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  columnsCount : number = 0;
  category: string | undefined;
  showDrawer : boolean = false;
  products: Product[] = [];
  pagedProducts: Product[] = [];
  pageSize = 10; // default page size
  pageIndex = 0;

  updatePagedProducts() {
    const startIndex = this.pageIndex * this.pageSize;
    const endIndex = startIndex + this.pageSize;
    this.pagedProducts = this.products.slice(startIndex, endIndex);
  }

  onPageChange(event: PageEvent) {
    this.pageSize = event.pageSize;
    this.pageIndex = event.pageIndex;
    this.updatePagedProducts();
  }
  constructor(public productService:ProductService) {
    productService.findAll().subscribe(
      (response:Product[])=> {
          console.log(response);
          this.products = response;
          this.updatePagedProducts();
      },
      (error:HttpErrorResponse)=>{
        console.log(error);
      }
    );
  }

  onColumnsChange(columnsCount: number): void{
    this.columnsCount = columnsCount;
  }

  onShowCategory(category: string): void {
    this.category = category;
  }

  onShowDrawerChange(newState: boolean): void{
    this.showDrawer = newState;
  }

}
