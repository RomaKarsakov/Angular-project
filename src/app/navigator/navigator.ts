import { Component} from '@angular/core';
import {TuiAvatar, TuiSegmented} from '@taiga-ui/kit';
import {RouterLink} from '@angular/router';
import {UserAvatar} from '../user-avatar/user-avatar';

@Component({
  selector: 'app-navigator',
  imports: [TuiSegmented, RouterLink, TuiAvatar,UserAvatar],
  templateUrl: './navigator.html',
  styleUrl: './navigator.css',
  standalone: true,
})
export class Navigator {
  protected index = 0
}
