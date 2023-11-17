import { Injectable, OnInit } from '@angular/core';
import { ProductsApiService } from '../api-services/products-api.service';
import { BehaviorSubject, Subject, lastValueFrom } from 'rxjs';
import { Product } from '../models/product.model';
import { PageableResponse } from '../models/pageableresponse.model';
import { ProductQuery } from '../models/product-query.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private readonly productsApiService: ProductsApiService) { }

  private readonly productsSubject: Subject<Product[]> = new BehaviorSubject<Product[]>([]);
  private readonly productDetailsSubject: Subject<Product> = new BehaviorSubject<Product>({} as Product);
  public products$ = this.productsSubject.asObservable();
  public productDetails$ = this.productDetailsSubject.asObservable();

  async loadProducts(queryParams: ProductQuery) {
    const products = await lastValueFrom(this.productsApiService.getProducts(queryParams));
    this.productsSubject.next(products.content);
  }

  async loadProduct(id: string) {
    const product = await lastValueFrom(this.productsApiService.getProduct(id));
    this.productDetailsSubject.next(product);
  }
}
