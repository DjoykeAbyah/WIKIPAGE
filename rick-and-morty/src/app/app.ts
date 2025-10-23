import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Home } from './components/pages/home/home';
import { List } from "./components/pages/list/list";
import { CharacterFilterComponent } from "./components/character-filter/character-filter";
import { CharacterCardComponent } from "./components/character-card/character-card";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Home, List, CharacterFilterComponent, CharacterCardComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('my-angular-app');
}
