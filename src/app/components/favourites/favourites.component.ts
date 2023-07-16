import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.component.html',
})
export class FavouritesComponent implements OnInit {
  favourites: any[] = [];

  constructor() {}

  ngOnInit() {
    this.loadFavourites();
  }

  loadFavourites() {
    const favouritesData = localStorage.getItem('favourites');
    if (favouritesData) {
      this.favourites = JSON.parse(favouritesData);
    }
  }

  removeFavourite(meal: any) {
    this.favourites = this.favourites.filter(
      (favMeal) => favMeal.idMeal !== meal.idMeal
    );
    this.saveFavourites();
  }

  saveFavourites() {
    localStorage.setItem('favourites', JSON.stringify(this.favourites));
  }
}
