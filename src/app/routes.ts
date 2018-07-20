import { Routes } from '@angular/router';
import { HeroesComponent } from './heroes/heroes.component';

export const ROUTES: Routes = [
    { path: 'heroes', component: HeroesComponent },
    { path: '', redirectTo: '/heroes', pathMatch: 'full' }
];