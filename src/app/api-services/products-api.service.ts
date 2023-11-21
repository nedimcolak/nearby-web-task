import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../models/product.model';
import { PageableResponse } from '../models/pageableresponse.model';
import { ProductQuery } from '../models/product-query.model';
import { CreateProduct } from '../models/create-product.model';
import { APP_CONFIG } from 'src/config/app.config';

@Injectable({
  providedIn: 'root'
})
export class ProductsApiService {

  constructor(private http: HttpClient) { }

  getProducts(queryParams: ProductQuery, categories?: string[]): Observable<any> {
    return this.http.get<any>(`${APP_CONFIG.API_BASE_URL}/products`, {responseType: 'json', params: {
      ...queryParams
    }});
  }

  getProduct(id: string): Observable<Product> {
    return this.http.get<Product>(`${APP_CONFIG.API_BASE_URL}/products/${id}`);
  }

  createProduct(product: CreateProduct): Observable<Product> {
    return this.http.post<Product>(`${APP_CONFIG.API_BASE_URL}/products`, product);
  }

  updateProduct(id: string, product: CreateProduct): Observable<Product> {
    return this.http.put<Product>(`${APP_CONFIG.API_BASE_URL}/products/${id}`, product);
  }

  deleteProduct(id: string): Observable<Product> {
    return this.http.delete<Product>(`${APP_CONFIG.API_BASE_URL}/products/${id}`);
  }
}
