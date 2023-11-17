import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './components/products/products.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { CreateProductComponent } from './components/create-product/create-product.component';
import { ManageCategoriesComponent } from './components/manage-categories/manage-categories.component';

const routes: Routes = [
  {
    path: "",
    component: ProductsComponent
  },
  {
    path: "product/:id",
    component: ProductDetailsComponent
  },
  {
    path: "products/manage",
    component: CreateProductComponent
  },
  {
    path: "categories/manage",
    component: ManageCategoriesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
