import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../models/product.model';
import { PageableResponse } from '../models/pageableresponse.model';
import { ProductQuery } from '../models/product-query.model';
import { CreateProduct } from '../models/create-product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsApiService {

  constructor(private http: HttpClient) { }

  getProducts(queryParams: ProductQuery): Observable<any> {
    return this.http.get<any>('http://localhost:4200/api/products', {responseType: 'json', params: {
      ...queryParams
    }});
  }

  getProduct(id: string): Observable<Product> {
    return this.http.get<Product>(`http://localhost:4200/api/products/${id}`);
  }

  createProduct(product: CreateProduct): Observable<Product> {
    return this.http.post<Product>('http://localhost:4200/api/products', product);
  }
}
