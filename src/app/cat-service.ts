import { Injectable } from '@angular/core';
import { Cat } from './cat';
import { MOCK_CATS } from './cats';

@Injectable({ providedIn: 'root' })
export class CatService {
  private allCats: Cat[] = MOCK_CATS;
  private favorites: Cat[] = [];

  constructor() {
    this.loadFavorites();
  }

  // Получить всех котиков (для главной)
  getCats(): Cat[] {
    return this.allCats;
  }

  // Фильтрация по названию и тегам
  filterCats(search: string, selectedTags: string[]): Cat[] {
    return this.allCats.filter(cat => {
      const matchesName = cat.name.toLowerCase().includes(search.toLowerCase());
      const matchesTags = selectedTags.length === 0 ||
        selectedTags.some(tag => cat.tags.includes(tag));
      return matchesName && matchesTags;
    });
  }

  // Получить все уникальные теги для фильтра
  getAllTags(): string[] {
    const tagsSet = new Set<string>();
    this.allCats.forEach(cat => cat.tags.forEach(tag => tagsSet.add(tag)));
    return Array.from(tagsSet);
  }

  // Избранное
  getFavorites(): Cat[] {
    return this.favorites;
  }

  toggleFavorite(cat: Cat): void {
    const index = this.favorites.findIndex(f => f.id === cat.id);
    if (index === -1) {
      this.favorites.push(cat);
    } else {
      this.favorites.splice(index, 1);
    }
    this.saveFavorites();
  }

  isFavorite(cat: Cat): boolean {
    return this.favorites.some(f => f.id === cat.id);
  }

  private saveFavorites(): void {
    localStorage.setItem('favorites', JSON.stringify(this.favorites));
  }

  private loadFavorites(): void {
    const saved = localStorage.getItem('favorites');
    if (saved) {
      this.favorites = JSON.parse(saved);
    }
  }
}
