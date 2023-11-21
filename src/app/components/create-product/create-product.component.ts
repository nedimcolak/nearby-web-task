import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
export class CreateProductComponent implements OnInit {
  constructor(
    private readonly categoryService: CategoryService,
    private readonly productsApiService: ProductsApiService,
    private readonly appRouter: Router,
    private readonly imageUploadService: ImageUploadService,
    private readonly route: ActivatedRoute
  ) { }
  
  categories = this.categoryService.categories$;
  uploadedImageURL = this.imageUploadService.uploadedImageURL$;

  product: CreateProduct = {} as CreateProduct;
  isEdit: boolean = false;
  productId: string = '';

  ngOnInit(): void {
    const paramMap = this.route.snapshot.paramMap;
    this.isEdit = paramMap.has('id');
    if (this.isEdit) {
      this.productId = paramMap.get('id') as string;
      this.productsApiService.getProduct(this.productId)
        .subscribe((result => {
          this.product = result;
        }))
    }
    this.uploadedImageURL.subscribe(url => this.product.image = url);
  }

  createOrUpdateProduct() {
    if(this.isEdit) {
      this.productsApiService
        .updateProduct(this.productId, this.product)
        .subscribe(result => {
          this.appRouter.navigate(['product', result.id])
        })
    }
    else {
      this.productsApiService
        .createProduct(this.product)
        .subscribe((result => {
          this.appRouter.navigate(['product', result.id])
        }))
    }
  }

  deleteProduct() {
    this.productsApiService.deleteProduct(this.productId)
      .subscribe(result => {
        this.appRouter.navigateByUrl("/");
      })
  }

  getModeText() {
    return this.isEdit ? 'Edit' : 'Create';
  }
}
