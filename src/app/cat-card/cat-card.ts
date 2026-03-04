import { Component, Input } from '@angular/core';
import { Cat } from '../cat';
import { CatService } from '../cat-service';
import {NgForOf} from '@angular/common';
import {TuiButton} from '@taiga-ui/core';
import {ButtonsHover} from '../buttons-hover';

@Component({
  selector: 'app-cat-card',
  templateUrl: './cat-card.html',
  standalone: true,
  imports: [
    NgForOf,
    TuiButton,
    ButtonsHover
  ],
  styleUrls: ['./cat-card.css']
})
export class CatCard {
  @Input() cat!: Cat;

  constructor(
    private catService: CatService,
  ) {}

  get isFavorite(): boolean {
    return this.catService.isFavorite(this.cat);
  }

  toggleFavorite(event: Event): void {
    event.stopPropagation();
    this.catService.toggleFavorite(this.cat);
  }
}
