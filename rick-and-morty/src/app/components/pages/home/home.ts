import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharacterFilterComponent } from '../../character-filter/character-filter';
import { CharacterCardComponent } from '../../character-card/character-card';
import { Character } from '../../../models/character.model';
import { CharacterService } from '../../../services/characterService';
import { List } from "../list/list";

@Component({
  selector: 'app-home',
  imports: [CharacterFilterComponent, CharacterCardComponent, CommonModule, List],
  standalone: true,
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home implements OnInit {
  characters: Character[] = [];

  get visibleCharacters(): Character[] {
  return this.characters.slice(0, 12);
  }

  constructor(private characterService: CharacterService) {};

  ngOnInit() {
    this.characterService.getCharacters().subscribe(response => {
      this.characters = response.results;
    });
  }

  onFilterChange(filter: { name: string; status: string }) {
    this.characterService.getCharacters().subscribe(response => {
      this.characters = response.results;
    });
  }

}
