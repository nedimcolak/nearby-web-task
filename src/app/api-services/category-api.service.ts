import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from '../models/category.model';
import { PageableResponse } from '../models/pageableresponse.model';
import { APP_CONFIG } from 'src/config/app.config';

@Injectable({
  providedIn: 'root'
})
export class CategoryApiService {

  constructor(private httpClient: HttpClient) { }

  getCategories(): Observable<PageableResponse<Category>> {
    return this.httpClient.get<PageableResponse<Category>>(`${APP_CONFIG.API_BASE_URL}/categories`, {
      params: {
        page: 0
      }
    });
  }

  getCategory(id: string): Observable<Category> {
    return this.httpClient.get<Category>(`${APP_CONFIG.API_BASE_URL}/categories/${id}`);
  }

  createCategory(category: Category): Observable<any> {
    return this.httpClient.post<Category>('${APP_CONFIG.API_BASE_URL}/categories', category);
  }

  updateCategory(id: string, category: Category): Observable<Category> {
    return this.httpClient.put<Category>(`${APP_CONFIG.API_BASE_URL}/categories/${id}`, category);
  }

  deleteCategory(id: string): Observable<Category> {
    return this.httpClient.delete<Category>(`${APP_CONFIG.API_BASE_URL}/categories/${id}`);
  }
}
