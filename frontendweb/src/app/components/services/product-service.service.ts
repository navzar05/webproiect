import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {Observable} from "rxjs";
import {ProductComponent} from "../pages/home/components/product/product.component";
import {Product} from "../interfaces/product";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private usersUrl: string;
  private mainUrl : string = 'http://localhost:8090/api/products';

  constructor(private http: HttpClient) {
    this.usersUrl = 'http://localhost:8090/api/products';
  }

  public findAll(): Observable<Product[]> {
    return this.http.get<Product[]>(this.usersUrl);
  }

  findSpecific(url: string): Observable<Product> {
    console.log(url);
    return this.http.get<Product>(this.mainUrl + url);
  }
}
