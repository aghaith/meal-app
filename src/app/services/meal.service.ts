import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MealService {
  private apiUrl = 'https://www.themealdb.com/api/json/v1/1/';

  constructor(private http: HttpClient) {}

  getCategories(): Observable<any> {
    const url = `${this.apiUrl}categories.php`;
    return this.http.get<any>(url);
  }

  getMealsByCategory(category: string): Observable<any> {
    const url = `${this.apiUrl}filter.php?c=${category}`;
    return this.http.get<any>(url);
  }

  getRandomMeal(): Observable<any> {
    const url = `${this.apiUrl}random.php`;
    return this.http.get<any>(url);
  }
}
