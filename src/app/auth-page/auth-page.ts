import { Component } from '@angular/core';
import { Login } from '../login';
import {routes} from '../app.routes';
import {Router} from '@angular/router';
import {TuiButton, TuiLabel, TuiTextfieldComponent, TuiTextfieldDirective} from '@taiga-ui/core';
import {FormsModule} from '@angular/forms';
import {ButtonsHover} from '../buttons-hover';

@Component({
    selector: 'app-auth-page',
  imports: [
    TuiButton,
    TuiTextfieldComponent,
    TuiTextfieldDirective,
    FormsModule,
    TuiLabel,
    ButtonsHover
  ],
    templateUrl: './auth-page.html',
    styleUrl: './auth-page.css',
    standalone: true
})
export class AuthPage {
  constructor(private authService: Login, private router: Router) { }
  protected value = " "

  login() {
    if (this.value.trim()) {
      this.authService.login(this.value);
    }
    this.router.navigate(['/home']);
  }
}

