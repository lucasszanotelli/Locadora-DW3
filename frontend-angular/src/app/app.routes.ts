import { Routes } from '@angular/router';
import { DashboardPageComponent } from './pages/dashboard-page/dashboard-page';
import { ManagementPageComponent } from './pages/management-page/management-page';
export const routes: Routes = [
  { path: '', pathMatch: 'full', component: DashboardPageComponent },
  { path: ':section', component: ManagementPageComponent },
  { path: '**', redirectTo: '' },
];
