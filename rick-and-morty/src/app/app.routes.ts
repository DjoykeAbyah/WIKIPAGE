import { Routes } from '@angular/router';
import { List } from './components/pages/list/list';
import { Home } from './components/pages/home/home';
import { CharacterDetailsComponent } from './components/character-details/character-details';

export const routes: Routes = [
    { path: '', component: Home },
    { path: 'home', component: Home },
    { path: 'list', component: List },
    { path: 'details/:id', component: CharacterDetailsComponent },
];