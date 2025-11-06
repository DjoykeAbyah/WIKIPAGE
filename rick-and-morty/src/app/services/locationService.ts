import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Location } from '../models/location.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LocationService {
  
  private apiUrl = 'https://rickandmortyapi.com/api/location';

  constructor(private httpClient: HttpClient) { }

  getLocations(page: number = 1): Observable<{ info: { count: number; pages: number; next: string | null; prev: string | null }; results: Location[] }> {
    return this.httpClient.get<{ info: { count: number; pages: number; next: string | null; prev: string | null }; results: Location[] }>(`${this.apiUrl}?page=${page}`);
  }

  getLocationById(id: number): Observable<Location> {
    return this.httpClient.get<Location>(`${this.apiUrl}/${id}`);
  }

  getLocationByUrl(url: string): Observable<Location> {
    return this.httpClient.get<Location>(url);
  }
}
