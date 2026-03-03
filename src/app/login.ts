import {inject, Injectable} from '@angular/core';
import {routes} from './app.routes';
import {Router} from '@angular/router';
import {UserAvatar} from './user-avatar/user-avatar';
import {BehaviorSubject} from 'rxjs';
import {TuiDialogService} from '@taiga-ui/core';

@Injectable({
  providedIn: 'root',
})
export class Login {
  private authorized = false
  private userNameSource = new BehaviorSubject<string>('');
  private userAvatarSource = new BehaviorSubject<string>('@tui.user');
  userName$ = this.userNameSource.asObservable();
  userAvatar$ = this.userAvatarSource.asObservable();
  constructor(private router: Router) {
    this.authorized = !!localStorage.getItem('auth');
    // Если есть сохранённое имя, можно восстановить
    const savedName = localStorage.getItem('user');
    const savedAvatar = localStorage.getItem('avatar')
    if (savedName) {
      this.userNameSource.next(savedName);
    }
    if (savedAvatar){
      this.userAvatarSource.next(savedAvatar)
    }
  }
  login(newN:string){
    this.authorized=true
    if (localStorage.getItem(newN.trim())){
      this.changeAvatar(JSON.parse(localStorage.getItem(newN.trim()) as string)[0])
      localStorage.setItem('favorites',JSON.parse(localStorage.getItem(newN.trim()) as string)[1])
    }
    localStorage.setItem("auth","true")
    localStorage.setItem("user",newN)
    this.userNameSource.next(newN)
  }
  isLogin(){
    return this.authorized
  }

  changeName(newN:string){
    if (localStorage.getItem(newN.trim())){
      return false
    }
    localStorage.removeItem((localStorage.getItem('user') as string).trim())
    localStorage.setItem("auth","true")
    localStorage.setItem("user",newN)
    this.userNameSource.next(newN)
    window.location.reload()
    return true
  }

  changeAvatar(newA: string){
    this.userAvatarSource.next(newA)
    localStorage.setItem("avatar",newA)
  }

  quit(){
    localStorage.setItem((localStorage.getItem('user') as string).trim(),JSON.stringify([localStorage.getItem('avatar') as string,localStorage.getItem('favorites') as string]))
    localStorage.removeItem('user')
    localStorage.removeItem('avatar')
    localStorage.removeItem('auth')
    localStorage.removeItem('favorites')
  }

}
