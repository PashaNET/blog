import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { MainPageComponent } from './pages/main-page/main-page.component';

const routes: Routes = [
  // { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: '', component: MainPageComponent }
];
// { path: '**', component: PageNotFoundComponent }
//loadChildren - lazy load
//make for authentificationModule

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);