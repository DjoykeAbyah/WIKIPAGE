import { Component, OnInit } from '@angular/core';
import { GoBackButtonComponent } from '../../go-back-button';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { Character } from '../../../models/character.model';
import { Episode } from '../../../models/episode.model';
import { EpisodeService } from '../../../services/episodeService';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-character-details',
  standalone: true,
  imports: [CommonModule, GoBackButtonComponent],
  templateUrl: './character-details.html',
  styleUrl: './character-details.css',
})
export class CharacterDetailsComponent implements OnInit {
  character: Character | null = null;
  episodes: Episode[] = [];
  loading: boolean = true;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private httpClient: HttpClient,
    private episodeService: EpisodeService
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      if (id) {
        this.loading = true;
        this.character = null;
        this.episodes = [];
        this.loadCharacter(parseInt(id));
      }
    });
  }

  loadCharacter(id: number) {
    this.httpClient.get<Character>(`https://rickandmortyapi.com/api/character/${id}`).subscribe({
      next: (character) => {
        this.character = character;
        this.loadEpisodes();
      },
      error: () => {
        this.loading = false;
      }
    });
  }

  loadEpisodes() {
    if (this.character && this.character.episode.length > 0) {
      const episodeIds = this.character.episode.map((url: string) => {
        const parts = url.split('/');
        return parseInt(parts[parts.length - 1]);
      });
      
      this.episodeService.getMultipleEpisodes(episodeIds).subscribe((episodes: Episode | Episode[]) => {
        this.episodes = Array.isArray(episodes) ? episodes : [episodes];
        this.loading = false;
      });
    } else {
      this.loading = false;
    }
  }

  goBack() {
    this.router.navigate(['/characters']);
  }

  goToEpisode(episode: Episode) {
    this.router.navigate(['/episode', episode.id]);
  }

  goToLocation() {
    if (this.character && this.character.location.url) {
      const parts = this.character.location.url.split('/');
      const locationId = parts[parts.length - 1];
      this.router.navigate(['/location', locationId]);
    }
  }

  goToOrigin() {
    if (this.character && this.character.origin.url) {
      const parts = this.character.origin.url.split('/');
      const locationId = parts[parts.length - 1];
      this.router.navigate(['/location', locationId]);
    }
  }

  getStatusClass(): string {
    if (!this.character) return '';
    return this.character.status.toLowerCase();
  }
}