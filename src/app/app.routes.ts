import { Routes } from '@angular/router';
import { List } from './components/pages/list/list';
import { Home } from './components/pages/home/home';
import { CharactersPage } from './components/pages/characters/characters';
import { CharacterDetailsComponent } from './components/pages/character-details/character-details';
import { EpisodesPage } from './components/pages/episodes/episodes';
import { LocationsPage } from './components/pages/locations/locations';
import { EpisodeDetailsComponent } from './components/pages/episode-details/episode-details';
import { LocationDetailsComponent } from './components/pages/location-details/location-details';

export const routes: Routes = [
    { path: '', component: Home },
    { path: 'home', component: Home },
    { path: 'characters', component: CharactersPage },
    { path: 'list', component: List },
    { path: 'details/:id', component: CharacterDetailsComponent },
    { path: 'episodes', component: EpisodesPage },
    { path: 'episode/:id', component: EpisodeDetailsComponent },
    { path: 'locations', component: LocationsPage },
    { path: 'location/:id', component: LocationDetailsComponent },
];