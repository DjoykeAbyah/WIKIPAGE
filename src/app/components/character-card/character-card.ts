import { Component, Input, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Character } from '../../models/character.model';
import { Router } from '@angular/router';

@Component({
  selector: 'character-card',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './character-card.html',
  styleUrl: './character-card.css',
  encapsulation: ViewEncapsulation.None
})
export class CharacterCardComponent {

  @Input() character!: Character;
  constructor(private router: Router) {}

  get statusClass(): string {
    return this.character.status.toLowerCase().replace(' ', '-');
  }

  goToDetails(character: Character) {
    this.router.navigate(['/details', character.id]);
    console.log('Navigating to details of character:', character);
  }
}