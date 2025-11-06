import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Episode } from '../models/episode.model';
import { Observable, forkJoin } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EpisodeService {
  
  private apiUrl = 'https://rickandmortyapi.com/api/episode';

  constructor(private httpClient: HttpClient) { }

  getEpisodes(page: number = 1): Observable<{ info: { count: number; pages: number; next: string | null; prev: string | null }; results: Episode[] }> {
    return this.httpClient.get<{ info: { count: number; pages: number; next: string | null; prev: string | null }; results: Episode[] }>(`${this.apiUrl}?page=${page}`);
  }

  getEpisodeById(id: number): Observable<Episode> {
    return this.httpClient.get<Episode>(`${this.apiUrl}/${id}`);
  }

  getMultipleEpisodes(ids: number[]): Observable<Episode[]> {
    if (ids.length === 0) return new Observable(observer => observer.next([]));
    if (ids.length === 1) {
      return new Observable(observer => {
        this.getEpisodeById(ids[0]).subscribe(episode => {
          observer.next([episode]);
          observer.complete();
        });
      });
    }
    return this.httpClient.get<Episode[]>(`${this.apiUrl}/${ids.join(',')}`);
  }
}
