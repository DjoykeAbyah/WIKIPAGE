import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { Episode } from '../../models/episode.model';

@Component({
  selector: 'episode-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './episode-card.html',
  styleUrl: './episode-card.css'
})
export class EpisodeCardComponent {
  @Input() episode!: Episode;

  constructor(private router: Router) {}

  viewEpisodeDetails() {
    this.router.navigate(['/episode', this.episode.id]);
  }

  getCharacterCount(): number {
    return this.episode.characters.length;
  }
}
