import {Component, OnInit, signal} from '@angular/core';
import {TuiAvatar} from '@taiga-ui/kit';
import {Observable} from 'rxjs';
import {Login} from '../login';
import {AsyncPipe} from '@angular/common';

@Component({
    selector: 'app-user-avatar',
  imports: [
    TuiAvatar,
    AsyncPipe
  ],
    templateUrl: './user-avatar.html',
    styleUrl: './user-avatar.css',
    standalone: true
})
export class UserAvatar implements OnInit{
  userName$!: Observable<string>;
  userAvatar$!: Observable<string>;
  constructor(private authService: Login) { }

  ngOnInit(): void {
    this.userName$ = this.authService.userName$;
    this.userAvatar$ = this.authService.userAvatar$;
  }
}
