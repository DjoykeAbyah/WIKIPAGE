import { Routes } from '@angular/router';
import { List } from './components/pages/list/list';
import { Home } from './components/pages/home/home';

export const routes: Routes = [
    { path: '', component: Home }, // Default route
    { path: 'home', component: Home }, // Home route
    { path: 'list', component: List }, // List route
];