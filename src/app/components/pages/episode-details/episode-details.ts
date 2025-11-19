import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { Episode } from '../../../models/episode.model';
import { Character } from '../../../models/character.model';
import { EpisodeService } from '../../../services/episodeService';
import { CharacterService } from '../../../services/characterService';
import { CharacterCardComponent } from '../../character-card/character-card';
import { GoBackButtonComponent } from '../../go-back-button';
import { forkJoin } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-episode-details',
  standalone: true,
  imports: [CommonModule, CharacterCardComponent, GoBackButtonComponent],
  templateUrl: './episode-details.html',
  styleUrl: './episode-details.css'
})
export class EpisodeDetailsComponent implements OnInit {
  episode: Episode | null = null;
  characters: Character[] = [];
  loading: boolean = true;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private episodeService: EpisodeService,
    private httpClient: HttpClient
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.loadEpisode(parseInt(id));
    }
  }

  loadEpisode(id: number) {
    this.episodeService.getEpisodeById(id).subscribe(episode => {
      this.episode = episode;
      this.loadCharacters();
    });
  }

  loadCharacters() {
    if (this.episode && this.episode.characters.length > 0) {
      const characterRequests = this.episode.characters.map(url =>
        this.httpClient.get<Character>(url)
      );
      
      forkJoin(characterRequests).subscribe(characters => {
        this.characters = characters;
        this.loading = false;
      });
    } else {
      this.loading = false;
    }
  }

  goBack() {
    this.router.navigate(['/episodes']);
  }
}
