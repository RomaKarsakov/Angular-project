import { Injectable } from '@angular/core';
import {routes} from './app.routes';
import {Router} from '@angular/router';
import {UserAvatar} from './user-avatar/user-avatar';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Login {
  private authorized = false
  private userNameSource = new BehaviorSubject<string>(''); // начальное значение — пустая строка
  userName$ = this.userNameSource.asObservable();
  constructor(private router: Router) {
    this.authorized = !!localStorage.getItem('auth');
    // Если есть сохранённое имя, можно восстановить
    const savedName = localStorage.getItem('user');
    if (savedName) {
      this.userNameSource.next(savedName);
    }
  }
  login(newN:string){
    this.authorized=true
    localStorage.setItem("auth","true")
    localStorage.setItem("user",newN)
    this.userNameSource.next(newN)
  }
  isLogin(){
    return this.authorized
  }
}
