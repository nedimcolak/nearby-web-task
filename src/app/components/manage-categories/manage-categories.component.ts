import { Component } from '@angular/core';
import { CategoryApiService } from 'src/app/api-services/category-api.service';
import { Category } from 'src/app/models/category.model';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-manage-categories',
  templateUrl: './manage-categories.component.html',
  styleUrls: ['./manage-categories.component.scss']
})
export class ManageCategoriesComponent {
  constructor(
    private readonly categoryService: CategoryService,
    private readonly categoryApiService: CategoryApiService
  ) {}

  categories = this.categoryService.categories$;
  newCategory: Category = {} as Category;
  editIndex: number | null = null;
  editCategoryName: string | null = null;

  onUpdateCategory(id: string, category: Category) {
    this.categoryApiService.updateCategory(id, category).subscribe(response => {
      this.categoryService.loadCategories();
    });
  }

  onCreateCategory() {
    this.categoryApiService.createCategory(this.newCategory).subscribe(
      (response) => {
        this.newCategory = {} as Category;
        this.categoryService.loadCategories();
      }
    )
  }

  onDeleteCategory(id: string) {
    this.categoryApiService.deleteCategory(id).subscribe(
      (response) => {
        this.categoryService.loadCategories();
      }
    )
  }
}
