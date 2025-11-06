import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { Location } from '../../models/location.model';

@Component({
  selector: 'location-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './location-card.html',
  styleUrl: './location-card.css'
})
export class LocationCardComponent {
  @Input() location!: Location;

  constructor(private router: Router) {}

  viewLocationDetails() {
    this.router.navigate(['/location', this.location.id]);
  }

  getResidentCount(): number {
    return this.location.residents.length;
  }
}
