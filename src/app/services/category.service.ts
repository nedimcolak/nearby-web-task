import { Injectable } from '@angular/core';
import { CategoryApiService } from '../api-services/category-api.service';
import { BehaviorSubject, Subject, lastValueFrom } from 'rxjs';
import { Category } from '../models/category.model';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  constructor(private readonly categoryApiService: CategoryApiService) { }

  private readonly categoriesSubject: Subject<Category[]> = new BehaviorSubject<Category[]>([]);

  public categories$ = this.categoriesSubject.asObservable();

  async loadCategories() {
    const categories = await lastValueFrom(this.categoryApiService.getCategories());
    this.categoriesSubject.next(categories.content);
  }
}
