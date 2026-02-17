import { TuiRoot } from "@taiga-ui/core";
import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navigator } from './navigator/navigator';
import { FavoritesPage } from './favorites-page/favorites-page';
import { AuthPage } from './auth-page/auth-page';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TuiRoot, Navigator, FavoritesPage, AuthPage],
  templateUrl: './app.html',
  standalone: true,
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Angular-project');
}

