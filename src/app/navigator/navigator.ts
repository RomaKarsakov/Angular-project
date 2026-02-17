import { Component } from '@angular/core';
import {TuiSegmented} from '@taiga-ui/kit';
import {RouterLink} from '@angular/router';


@Component({
  selector: 'app-navigator',
  imports: [TuiSegmented, RouterLink,],
  templateUrl: './navigator.html',
  styleUrl: './navigator.css',
  standalone: true
})
export class Navigator {
  protected index = 0
}
