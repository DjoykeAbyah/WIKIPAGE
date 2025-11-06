import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EpisodeCardComponent } from '../../episode-card/episode-card';
import { Episode } from '../../../models/episode.model';
import { EpisodeService } from '../../../services/episodeService';
import { PaginationComponent } from '../../pagination/pagination';

@Component({
  selector: 'app-episodes',
  standalone: true,
  imports: [CommonModule, EpisodeCardComponent, PaginationComponent],
  templateUrl: './episodes.html',
  styleUrl: './episodes.css'
})
export class EpisodesPage implements OnInit {
  episodes: Episode[] = [];
  currentPage: number = 1;
  totalPages: number = 0;

  constructor(private episodeService: EpisodeService) {}

  ngOnInit() {
    this.loadEpisodes();
  }

  loadEpisodes() {
    this.episodeService.getEpisodes(this.currentPage).subscribe(response => {
      this.episodes = response.results;
      this.totalPages = response.info.pages;
    });
  }

  goToPage(page: number) {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
      this.loadEpisodes();
      // Scroll to top
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }

  goToNextPage() {
    if (this.currentPage < this.totalPages) {
      this.goToPage(this.currentPage + 1);
    }
  }

  goToPreviousPage() {
    if (this.currentPage > 1) {
      this.goToPage(this.currentPage - 1);
    }
  }
}
