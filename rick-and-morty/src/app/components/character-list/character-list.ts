import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Character } from '../../models/character.model';
import { CharacterService } from '../../services/characterService';
import { CharacterCardComponent } from '../character-card/character-card';

/**
 * TODO Display a list of character cards
 * Handle loading states and errors
 */

@Component({
  selector: 'app-character-list',
  imports: [CommonModule, CharacterCardComponent],
  templateUrl: './character-list.html',
  styleUrl: './character-list.css'
})
export class CharacterListComponent implements OnInit {
  characters: Character[] = [];

  constructor(private characterService: CharacterService) { }

  ngOnInit() {
    this.characterService.getCharacters().subscribe(response => {
      console.log('API response:', response);
      this.characters = response.results;
    });
  }
}
