import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  // New properties for the Edamam API
  private nutritionApiUrl = 'https://edamam-food-and-grocery-database.p.rapidapi.com/api/food-database/v2/parser';
  private nutritionApiHeaders = new HttpHeaders()
    .set('X-RapidAPI-Key', environment.rapidApiKey)
    .set('X-RapidAPI-Host', 'edamam-food-and-grocery-database.p.rapidapi.com');

  constructor(private http: HttpClient) { }

  // Method to get nutrition info from Edamam
  getNutritionInfo(query: string): Observable<any> {
    // Edamam uses 'ingr' as the parameter for the food query
    const params = { ingr: query };
    return this.http.get(this.nutritionApiUrl, { headers: this.nutritionApiHeaders, params: params });
  }
}