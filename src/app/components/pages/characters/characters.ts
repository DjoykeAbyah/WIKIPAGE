import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharacterFilterComponent } from '../../character-filter/character-filter';
import { CharacterCardComponent } from '../../character-card/character-card';
import { Character } from '../../../models/character.model';
import { CharacterService } from '../../../services/characterService';
import { PaginationComponent } from '../../pagination/pagination';

@Component({
  selector: 'app-characters',
  imports: [CharacterFilterComponent, CharacterCardComponent, CommonModule, PaginationComponent],
  standalone: true,
  templateUrl: './characters.html',
  styleUrl: './characters.css'
})
export class CharactersPage implements OnInit {
  characters: Character[] = [];
  currentPage: number = 1;
  totalPages: number = 0;
  filters: { name: string; gender: string; species: string; status: string; type: string } = {
    name: '',
    gender: '',
    species: '',
    status: '',
    type: ''
  };

  constructor(private characterService: CharacterService) {};

  ngOnInit() {
    this.loadCharacters();
  }

  loadCharacters() {
    this.characterService.getCharacters(this.currentPage, this.filters).subscribe(response => {
      this.characters = response.results;
      this.totalPages = response.info.pages;
    });
  }

  onFilterChange(filter: { name: string; gender: string; species: string; status: string; type?: string }) {
    this.filters = { ...filter, type: filter.type ?? '' };
    this.currentPage = 1;
    this.loadCharacters();
  }

  goToPage(page: number) {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
      this.loadCharacters();
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