import { Routes } from '@angular/router';
import { FirmaComponent } from './components/firma/firma.component';

export const routes: Routes = [
    {
        path: '', pathMatch: 'full', redirectTo: 'firma'
    },
    {
        path: 'firma', component: FirmaComponent
    }
];
