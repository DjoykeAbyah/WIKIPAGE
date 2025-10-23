import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Character } from '../../models/character.model';
import { CharacterService } from '../../services/characterService';

/**
 * Create @Input() property to receive character data
 * Display character information (name, image, status, species, etc.)
 * Style the card layout
 */

@Component({
  selector: 'character-card',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './character-card.html',
  styleUrl: './character-card.css'
})
export class CharacterCardComponent {

  @Input() character!: Character; // This can receive ANY Character object

  get statusClass(): string {
    return this.character.status.toLowerCase().replace(' ', '-');
  }
}