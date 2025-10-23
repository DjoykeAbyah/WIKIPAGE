import { Routes } from '@angular/router';
import { List } from './components/pages/list/list';
import { Home } from './components/pages/home/home';

export const routes: Routes = [
    { path: '', component: Home },
    { path: 'home', component: Home },
    { path: 'list', component: List },
];