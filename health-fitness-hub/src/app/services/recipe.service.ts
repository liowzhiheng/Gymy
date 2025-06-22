import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';

@Injectable({ providedIn: 'root' })
export class RecipeService {
  private apiUrl = 'https://themealdb.p.rapidapi.com/random.php';
  private headers = new HttpHeaders()
    .set('X-RapidAPI-Key', environment.rapidApiKey)
    .set('X-RapidAPI-Host', 'themealdb.p.rapidapi.com');

  constructor(private http: HttpClient) { }

  getRandomRecipe(): Observable<any> {
    return this.http.get(this.apiUrl, { headers: this.headers });
  }
}