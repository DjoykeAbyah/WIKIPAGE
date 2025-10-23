import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'character-filter',
  imports: [],
  standalone: true,
  templateUrl: './character-filter.html',
  styleUrl: './character-filter.css'
})
export class CharacterFilterComponent {
  @Output() filterChange = new EventEmitter<{ name: string; status: string }>();

  emitFilterChange(name: string, status: string) {
    this.filterChange.emit({ name, status });
  }
}
