import { Injectable } from '@angular/core';
import { CanActivate, Router, UrlTree } from '@angular/router';
import { Login } from './login';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService: Login, private router: Router) {}

  canActivate(): boolean | UrlTree {
    console.log(this.authService.isLogin())
    if (this.authService.isLogin()) {
      return true;
    } else {
      return this.router.parseUrl('/login');
    }
  }
}
