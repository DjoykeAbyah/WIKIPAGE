import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiResponse, Character } from '../models/character.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {
  
  constructor(private httpClient: HttpClient) { }
  
  // getCharacters(): Observable<ApiResponse> {
  //   return this.httpClient.get<ApiResponse>('https://rickandmortyapi.com/api/character');
  // }

  getCharacters(page: number = 1, filters?: { name?: string; status?: string; species?: string }): Observable<ApiResponse> {
  const params: any = { page, ...filters };
  return this.httpClient.get<ApiResponse>('https://rickandmortyapi.com/api/character', { params });
}

}
