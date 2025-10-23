import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Character } from '../../../models/character.model';
import { CharacterService } from '../../../services/characterService';

/**
 * TODO Display a list of character cards
 * Handle loading states and errors
 */
@Component({
  selector: 'app-list',
  imports: [CommonModule],
  templateUrl: './list.html',
  styleUrl: './list.css'
})
export class List implements OnInit {
  
  characters: Character[] = [];
  
  constructor(private characterService: CharacterService) { }
  
  ngOnInit() {
    this.characterService.getCharacters().subscribe(response => {
      console.log('API response:', response);
      this.characters = response.results;
    });
  }
}
