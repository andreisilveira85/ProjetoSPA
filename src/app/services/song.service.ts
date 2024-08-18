import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SongService {
  private baseUrl = 'http://localhost:3001';

  constructor(private http: HttpClient) {}

  getAlbums(): Observable<any> {
    return this.http.get(`${this.baseUrl}/albums`);
  }

  getSongsByAlbum(albumId: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/albums/${albumId}`);
  }
}
