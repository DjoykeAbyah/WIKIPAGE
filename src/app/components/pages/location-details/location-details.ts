import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '../../../models/location.model';
import { Character } from '../../../models/character.model';
import { LocationService } from '../../../services/locationService';
import { CharacterCardComponent } from '../../character-card/character-card';
import { GoBackButtonComponent } from '../../go-back-button';
import { forkJoin } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-location-details',
  standalone: true,
  imports: [CommonModule, CharacterCardComponent, GoBackButtonComponent],
  templateUrl: './location-details.html',
  styleUrl: './location-details.css'
})
export class LocationDetailsComponent implements OnInit {
  location: Location | null = null;
  residents: Character[] = [];
  loading: boolean = true;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private locationService: LocationService,
    private httpClient: HttpClient
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.loadLocation(parseInt(id));
    }
  }

  loadLocation(id: number) {
    this.locationService.getLocationById(id).subscribe(location => {
      this.location = location;
      this.loadResidents();
    });
  }

  loadResidents() {
    if (this.location && this.location.residents.length > 0) {
      const residentRequests = this.location.residents.map(url =>
        this.httpClient.get<Character>(url)
      );
      
      forkJoin(residentRequests).subscribe(residents => {
        this.residents = residents;
        this.loading = false;
      });
    } else {
      this.loading = false;
    }
  }

  goBack() {
    this.router.navigate(['/locations']);
  }
}
