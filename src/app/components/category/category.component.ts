import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MealService } from '../../services/meal.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
})
export class CategoryComponent implements OnInit {
  categoryName!: string;
  meals!: any[];
  favourites: any[] = [];

  constructor(
    private route: ActivatedRoute,
    private mealService: MealService,
    private router: Router
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.categoryName = params['category'];
      this.getMealsByCategory(this.categoryName);
    });
  }

  getMealsByCategory(category: string) {
    this.mealService.getMealsByCategory(category).subscribe((response) => {
      this.meals = response.meals;
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

  saveFavourites() {
    localStorage.setItem('favourites', JSON.stringify(this.favourites));
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
}
