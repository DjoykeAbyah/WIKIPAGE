import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiResponse, Character } from '../models/character.model';
import { Observable } from 'rxjs';

//handle pagination and filtering in the service?

@Injectable({
  providedIn: 'root'
})
export class CharacterService {
  
  //create methods to fetch characters from the Rick and Morty API
  constructor(private httpClient: HttpClient) { }
  
  getCharacters(): Observable<ApiResponse> {
    return this.httpClient.get<ApiResponse>('https://rickandmortyapi.com/api/character');
  }

}
