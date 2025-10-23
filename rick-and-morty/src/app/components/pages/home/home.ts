import { Component } from '@angular/core';
import { CharacterFilterComponent } from '../../character-filter/character-filter';
import { CharacterCardComponent } from '../../character-card/character-card';

@Component({
  selector: 'app-home',
  imports: [ CharacterFilterComponent, CharacterCardComponent ],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {

  onFilterChange($event: Event) {
    //iomplement
  }

}
