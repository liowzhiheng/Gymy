import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  private proxyUrl = '/api/proxy.php';

  constructor(private http: HttpClient) { }

  getNutritionInfo(query: string): Observable<any> {
    const params = {
      service: 'nutrition',
      ingr: query
    };
    return this.http.get(this.proxyUrl, { params });
  }
}