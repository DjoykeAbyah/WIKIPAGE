import { Component, signal } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [ RouterOutlet ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('my-angular-app');

  constructor(private router: Router) {}

  fullText =  'In a quiet suburb, young Morty leads an ordinary life ..... until his eccentric, genius grandfather Rick Sanchez bursts back into his world.\n' + 
            'Armed with wild inventions and a portal gun, Rick whisks Morty away on mind-bending adventures across the cosmos.\n' + 
            'Together, they face outrageous aliens, parallel realities, and the consequences of Rick’s reckless genius—all while trying to make it home in time for dinner.';
  typedText = '';
  private currentIndex = 0;

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

  scrollToHomeCharacters() {
    this.router.navigate(['/home']).then(() => {
      setTimeout(() => {
        const el = document.getElementById('filter-bar');
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    });
  }

  goToEpisodes() {
    this.router.navigate(['/episodes']);
  }

  goToLocations() {
    this.router.navigate(['/locations']);
  }
}
