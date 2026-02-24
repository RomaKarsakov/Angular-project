import { Component } from '@angular/core';
import {CatService} from '../cat-service';
import {CatCard} from '../cat-card/cat-card';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-favorites-page',
  imports: [
    CatCard,
    NgForOf
  ],
  templateUrl: './favorites-page.html',
  styleUrl: './favorites-page.css',
  standalone: true
})
export class FavoritesPage {
  constructor(public catService: CatService) {}
}
