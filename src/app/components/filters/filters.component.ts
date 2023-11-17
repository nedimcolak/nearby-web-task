import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Category } from '../../models/category.model';
import { FormControl, FormGroup } from '@angular/forms';
import { SORT_ORDER, Sort } from '../../models/sort.model';
import { ProductsService } from 'src/app/services/products.service';
import { ProductQuery } from 'src/app/models/product-query.model';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss']
})
export class FiltersComponent implements OnInit {
  constructor(private productsService: ProductsService) {}
  
  productQuery: ProductQuery = {} as ProductQuery;
  
  @Input() categories: Category[] = [];
  selectCategories: FormControl = new FormControl('');
  sortFields: string[] = ['Price', 'Views']
  form!: FormGroup;
  
  ngOnInit(): void {
    this.productQuery.page = 0;
    this.productsService.loadProducts(this.productQuery);
  }

  onSearch(): void {
    this.productsService.loadProducts(this.productQuery);
  }
}
