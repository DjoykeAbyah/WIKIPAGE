import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LocationCardComponent } from '../../location-card/location-card';
import { Location } from '../../../models/location.model';
import { LocationService } from '../../../services/locationService';
import { PaginationComponent } from '../../pagination/pagination';

@Component({
  selector: 'app-locations',
  standalone: true,
  imports: [CommonModule, LocationCardComponent, PaginationComponent],
  templateUrl: './locations.html',
  styleUrl: './locations.css'
})
export class LocationsPage implements OnInit {
  locations: Location[] = [];
  currentPage: number = 1;
  totalPages: number = 0;

  constructor(private locationService: LocationService) {}

  ngOnInit() {
    this.loadLocations();
  }

  loadLocations() {
    this.locationService.getLocations(this.currentPage).subscribe(response => {
      this.locations = response.results;
      this.totalPages = response.info.pages;
    });
  }

  goToPage(page: number) {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
      this.loadLocations();
      // Scroll to top
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }

  goToNextPage() {
    if (this.currentPage < this.totalPages) {
      this.goToPage(this.currentPage + 1);
    }
  }

  goToPreviousPage() {
    if (this.currentPage > 1) {
      this.goToPage(this.currentPage - 1);
    }
  }
}
