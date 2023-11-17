import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ImageUploadService } from 'src/app/api-services/image-upload.service';
import { ProductsApiService } from 'src/app/api-services/products-api.service';
import { CreateProduct } from 'src/app/models/create-product.model';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.scss']
})
export class CreateProductComponent {
  constructor(
    private readonly categoryService: CategoryService,
    private readonly productsApiService: ProductsApiService,
    private readonly appRouter: Router,
    private readonly imageUploadService: ImageUploadService
  ) { }

  categories = this.categoryService.categories$;
  uploadedImageURL = this.imageUploadService.uploadedImageURL$;

  product: CreateProduct = {} as CreateProduct;
  isEdit: boolean = false;
  modeText: string = this.isEdit ? 'Edit' : 'Create';

  createProduct() {
    this.uploadedImageURL.subscribe(url => this.product.image = url);
    this.productsApiService
      .createProduct(this.product)
      .subscribe((result => {
        this.appRouter.navigate(['product', result.id])
      }))
  }
}
