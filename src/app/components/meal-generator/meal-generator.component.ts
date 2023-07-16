import { Component, OnInit } from '@angular/core';
import { MealService } from '../../services/meal.service';

@Component({
  selector: 'app-meal-generator',
  templateUrl: './meal-generator.component.html',
})
export class MealGeneratorComponent implements OnInit {
  randomMeal: any;
  favourites: any[] = [];

  constructor(private mealService: MealService) {}

  ngOnInit() {
    this.getRandomMeal();
    this.loadFavourites();
  }

  getRandomMeal() {
    this.mealService.getRandomMeal().subscribe((response) => {
      this.randomMeal = response.meals[0];
    });
  }

  toggleFavourite(meal: any) {
    if (this.isFavourite(meal)) {
      this.removeFavourite(meal);
    } else {
      this.addFavourite(meal);
    }
  }

  isFavourite(meal: any): boolean {
    return this.favourites.some((favMeal) => favMeal.idMeal === meal.idMeal);
  }

  addFavourite(meal: any) {
    this.favourites.push(meal);
    this.saveFavourites();
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

  loadFavourites() {
    const favouritesData = localStorage.getItem('favourites');
    if (favouritesData) {
      this.favourites = JSON.parse(favouritesData);
    }
  }
}
