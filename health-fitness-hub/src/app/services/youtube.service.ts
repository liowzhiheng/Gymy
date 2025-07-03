import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class YoutubeService {
  private proxyUrl = '/api/proxy.php';

  constructor(private http: HttpClient) { }

  searchFitnessVideos(query: string): Observable<any> {
    const searchQuery = `${query} fitness workout`;
    const params = {
      service: 'youtube',
      query: searchQuery
    };
    return this.http.get(this.proxyUrl, { params });
  }
}