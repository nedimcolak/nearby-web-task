import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../../models/product.model';
import { ProductsApiService } from '../../api-services/products-api.service';
import { ProductsService } from 'src/app/services/products.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private productsService: ProductsService
  ) {}

  loading: boolean = true;
  product = this.productsService.productDetails$;

  ngOnInit(): void {
    const productId = this.route.snapshot.paramMap.get('id') as string;
    this.productsService.loadProduct(productId);
  }
}
