import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';


@Injectable({
  providedIn: 'root'
})
export class ExerciseService {
  private apiUrl = 'https://exercisedb.p.rapidapi.com/exercises';
  private headers = new HttpHeaders()
    .set('X-RapidAPI-Key', environment.rapidApiKey)
    .set('X-RapidAPI-Host', 'exercisedb.p.rapidapi.com');

  constructor(private http: HttpClient) { }
  getExercisesByBodyPart(bodyPart: string): Observable<any> {
    return this.http.get(`<span class="math-inline">\{this\.apiUrl\}/bodyPart/</span>{bodyPart}`, { headers: this.headers });
  }
}
