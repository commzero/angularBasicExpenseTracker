import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';
import { CategoryResponseModel } from '../../models/category-response-model';
import { CategoryRequestModel } from '../../models/category-request-model';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor(
    private http: HttpClient
  ) { }

  getAllCategories() {
    return this.http.get<CategoryResponseModel>(environment.apiUrl + 'categories');
  }

  addNewCategory(body: CategoryRequestModel) {
    return this.http.post(environment.apiUrl + 'categories', body);
  }

  editCategory(body: CategoryRequestModel) {
    return this.http.put(environment.apiUrl + `categories/${body.id}`, body);
  }

  deleteCategory(id: number) {
    return this.http.delete(environment.apiUrl + `categories${id}`);
  }

}
