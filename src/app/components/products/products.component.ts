import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product.model';
import { CategoryApiService } from '../../api-services/category-api.service';
import { Category } from '../../models/category.model';
import { ProductsService } from 'src/app/services/products.service';
import { ProductQuery } from 'src/app/models/product-query.model';
import { SORT_ORDER } from 'src/app/models/sort.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  constructor(
    private productsService: ProductsService,
    private categoryService: CategoryApiService
  ) {}

  products = this.productsService.products$;
  
  pageQuery: ProductQuery = {
    page: 0,
    sortBy: 'views',
    order: 'DESC'
  }

  categories: Category[] = [];
  ngOnInit(): void {
    this.productsService.loadProducts(this.pageQuery);
    this.categoryService.getCategories()
        .subscribe(
          (response) => {
            this.categories = response.pageData;
          }
        )
  }


}
