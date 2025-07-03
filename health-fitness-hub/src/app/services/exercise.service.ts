import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExerciseService {
  private proxyUrl = '/api/proxy.php';

  constructor(private http: HttpClient) { }

  getExercisesByBodyPart(bodyPart: string): Observable<any> {
    const params = {
      service: 'exercise',
      bodyPart: bodyPart
    };
    return this.http.get(this.proxyUrl, { params });
  }
}