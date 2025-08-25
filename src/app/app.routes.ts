import { Routes } from '@angular/router';
import { MainComponent } from './shared/scafold/main/main.component';

export const routes: Routes = [
    {
        path: '', component: MainComponent, children: [
            { path: 'tramites', loadComponent: () => import('./pages/appointments/appointments').then(m => m.Appointments) },
            { path: 'registrar/:id', loadComponent: () => import('./pages/register/register').then(m => m.Register) },
            { pathMatch: 'full', path: '', redirectTo: 'tramites' },
        ]
    }
];
