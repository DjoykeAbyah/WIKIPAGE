import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CharacterFilter } from '../../models/character-filter.model';

@Component({
  selector: 'character-filter',
  imports: [FormsModule],
  standalone: true,
  templateUrl: './character-filter.html',
  styleUrl: './character-filter.css'
})
export class CharacterFilterComponent {
  @Output() filterChange = new EventEmitter<CharacterFilter>();

  name: string = '';
  status: string = '';
  species: string = '';
  type: string = '';
  gender: string = '';

  emitFilterChange() {
    this.filterChange.emit({
      name: this.name || '',
      gender: this.gender || '',
      species: this.species || '',
      type: this.type || '',
      status: this.status || ''
    });
  }

    clearFilters() {
    this.name = '';
    this.status = '';
    this.species = '';
    this.type = '';
    this.gender = '';
    this.emitFilterChange();
  }
}
