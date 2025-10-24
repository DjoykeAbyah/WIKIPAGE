import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'pagination',
  standalone: true,
  imports: [ ],
  templateUrl: './pagination.html',
  styleUrls: ['./pagination.css'],
})
export class PaginationComponent {
  @Input() currentPage!: number;
  @Input() totalPages!: number;
  @Output() previousPage = new EventEmitter<void>();
  @Output() nextPage = new EventEmitter<void>();

  onPrevious() {
    this.previousPage.emit();
  }

  onNext() {
    this.nextPage.emit();
  }
}
