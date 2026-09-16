import { Routes } from '@angular/router';
import { InputComponent } from './componentes-genericos/input/input';
import { Navbar } from './componentes-genericos/navbar/navbar';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'navbar' },
  { path: 'navbar', component: Navbar },
  { path: 'input', component: InputComponent },
  { path: '**', redirectTo: 'navbar' },
];
