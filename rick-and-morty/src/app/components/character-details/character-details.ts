import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Character } from '../../models/character.model';

@Component({
  selector: 'app-character-details',
  imports: [],
  templateUrl: './character-details.html',
  styleUrl: './character-details.css',
})
export class CharacterDetailsComponent {

  constructor(private router: Router) {}

  goBack() {
    this.router.navigate(['/characters']);
  }

  // goToDetails(character: Character) {
  //   this.router.navigate(['/characters', character.id]);
  //   console.log('Navigating to details of character:', character);
  // }

}
