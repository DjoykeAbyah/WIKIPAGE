import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'character-filter',
  imports: [],
  standalone: true,
  templateUrl: './character-filter.html',
  styleUrl: './character-filter.css'
})
export class CharacterFilterComponent {
  @Output() filterChange = new EventEmitter<{ name: string; gender: string; species: string; status: string }>();

  name: string = '';
  gender: string = '';
  species: string = '';
  status: string = '';

  emitFilterChange() {
    this.filterChange.emit({
      name: this.name || '',
      gender: this.gender || '',
      species: this.species || '',
      status: this.status || ''
    });
  }
}
