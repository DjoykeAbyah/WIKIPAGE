import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharacterFilterComponent } from '../../character-filter/character-filter';
import { CharacterCardComponent } from '../../character-card/character-card';
import { Character } from '../../../models/character.model';
import { CharacterService } from '../../../services/characterService';

@Component({
  selector: 'app-home',
  imports: [CharacterFilterComponent, CharacterCardComponent, CommonModule ],
  standalone: true,
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home implements OnInit {
  characters: Character[] = [];
  currentPage: number = 1;
  totalPages: number = 42;
  filters: { name: string; gender: string; species: string; status: string } = {
  name: '',
  gender: '',
  species: '',
  status: ''};

  get visibleCharacters(): Character[] {
  return this.characters.slice(0, 12);
  }

  constructor(private characterService: CharacterService) {};

  ngOnInit() {
    this.characterService.getCharacters().subscribe(response => {
      this.characters = response.results;
    });
  }

  onFilterChange(filter: { name: string; gender: string; species: string; status: string }) {
    this.filters = filter;
    this.characterService.getCharacters(this.currentPage, this.filters).subscribe(response => {
      this.characters = response.results;
    });
  }

}
