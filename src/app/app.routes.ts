import { Routes } from '@angular/router';
import { HomePage } from './home-page/home-page';
import { FavoritesPage } from './favorites-page/favorites-page';
import { AuthPage } from './auth-page/auth-page';
import { AuthGuard } from './auth-guard';
import {UserPage} from './user-page/user-page';

export const routes: Routes = [
  {
    path: 'login',
    component: AuthPage,
  },
  {
    path: "user",
    component: UserPage,
    canActivate: [AuthGuard]
  },
  {
    path: 'favorites',
    component: FavoritesPage,
    canActivate: [AuthGuard]
  },
  {
    path: "home",
    component: HomePage,
    canActivate: [AuthGuard],
  },
  {
    path: "",
    redirectTo: "login",
    pathMatch: "full"
  }
];
