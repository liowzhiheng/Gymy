import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class YoutubeService {
  private apiUrl = 'https://Youtube-search-and-download.p.rapidapi.com/search';
  private headers = new HttpHeaders()
    .set('X-RapidAPI-Key', environment.rapidApiKey)
    .set('X-RapidAPI-Host', 'Youtube-search-and-download.p.rapidapi.com');

  constructor(private http: HttpClient) { }

  searchVideos(query: string): Observable<any> {
    return this.http.get(this.apiUrl, { headers: this.headers, params: { query } });
  }
}
