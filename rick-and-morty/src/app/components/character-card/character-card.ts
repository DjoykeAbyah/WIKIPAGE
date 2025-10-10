import { Component, Input } from '@angular/core';
import { Character } from '../../models/character.model';
import { CharacterService } from '../../services/characterService';


/**
 * Create @Input() property to receive character data
 * Display character information (name, image, status, species, etc.)
 * Style the card layout
 */

@Component({
  selector: 'app-character-card',
  imports: [],
  templateUrl: './character-card.html',
  styleUrl: './character-card.css'
})
export class CharacterCardComponent {
  @Input() character!: Character; // This can receive ANY Character object
}