import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class YoutubeService {

  private apiUrl = 'https://youtube-search-and-download.p.rapidapi.com/search';

  constructor(private http: HttpClient) { }

  searchFitnessVideos(query: string): Observable<any> {
    const searchQuery = `${query} fitness workout`;

    const headers = new HttpHeaders({
      'x-rapidapi-host': 'youtube-search-and-download.p.rapidapi.com',
      'x-rapidapi-key': environment.rapidApiKey
    });

    const params = new HttpParams().set('query', searchQuery);
    
    return this.http.get(this.apiUrl, { headers, params });
  }
}