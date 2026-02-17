import { Component } from '@angular/core';
import { Login } from '../login';
import {routes} from '../app.routes';
import {Router} from '@angular/router';

@Component({
    selector: 'app-auth-page',
    imports: [],
    templateUrl: './auth-page.html',
    styleUrl: './auth-page.css',
    standalone: true
})
export class AuthPage {
  constructor(private authService: Login, private router: Router) { }

  login() {
    this.authService.login();        // устанавливаем флаг авторизации
    this.router.navigate(['/home']); // переходим на защищённую страницу
  }
}

