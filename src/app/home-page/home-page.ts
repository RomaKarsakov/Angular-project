import { Component } from '@angular/core';
import {Navigator} from '../navigator/navigator';

@Component({
  selector: 'app-home-page',
  imports: [Navigator],
  templateUrl: './home-page.html',
  styleUrl: './home-page.css',
  standalone: true
})
export class HomePage {

}
