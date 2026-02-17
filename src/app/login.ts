import { Injectable } from '@angular/core';
import {routes} from './app.routes';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class Login {
  private authorized = !!localStorage.getItem("auth")
  login(){
    this.authorized=true
    localStorage.setItem("auth","true")
  }
  isLogin(){
    return this.authorized
  }
}
