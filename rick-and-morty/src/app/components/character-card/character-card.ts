import { Component, Input, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Character } from '../../models/character.model';

@Component({
  selector: 'character-card',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './character-card.html',
  styleUrl: './character-card.css',
  encapsulation: ViewEncapsulation.None // <-- Add this line
})
export class CharacterCardComponent {

  @Input() character!: Character; // This can receive ANY Character object

  get statusClass(): string {
    return this.character.status.toLowerCase().replace(' ', '-');
  }

  showDetails() {
  // Add your logic here (e.g., emit an event, navigate, etc.)
  }
}