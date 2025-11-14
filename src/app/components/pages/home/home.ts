import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home implements OnInit {
  fullText = 'In a quiet suburb, young Morty leads an ordinary life ..... until his eccentric, genius grandfather Rick Sanchez bursts back into his world.\n' + 
            'Armed with wild inventions and a portal gun, Rick whisks Morty away on mind-bending adventures across the cosmos.\n' + 
            'Together, they face outrageous aliens, parallel realities, and the consequences of Rick\'s reckless genius—all while trying to make it home in time for dinner.';
  typedText = '';
  private currentIndex = 0;

  constructor(private router: Router) {}

  ngOnInit() {
    this.typeText();
  }

  get typedTextWithBreaks(): string {
    return this.typedText.replace(/\n/g, '<br>');
  }

  typeText() {
    if (this.currentIndex < this.fullText.length) {
      this.typedText += this.fullText[this.currentIndex];
      this.currentIndex++;
      setTimeout(() => this.typeText(), 90);
    }
  }

  goToCharacters() {
    this.router.navigate(['/characters']);
  }

  goToEpisodes() {
    this.router.navigate(['/episodes']);
  }

  goToLocations() {
    this.router.navigate(['/locations']);
  }
}