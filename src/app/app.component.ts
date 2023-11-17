import { Component, OnInit } from '@angular/core';
import { ProductsApiService } from './api-services/products-api.service';
import { Product } from './models/product.model';
import { CategoryService } from './services/category.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(private readonly categoryService: CategoryService) { }
  
  title = 'near-by-web';

  ngOnInit(): void {
    this.categoryService.loadCategories();
  }
}
