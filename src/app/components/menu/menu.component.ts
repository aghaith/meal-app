import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MealService } from '../../services/meal.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
})
export class MenuComponent implements OnInit {
  categories!: any[];

  constructor(private mealService: MealService, private router: Router) {}

  ngOnInit() {
    this.getCategories();
  }

  getCategories() {
    this.mealService.getCategories().subscribe((response) => {
      this.categories = response.categories;
    });
  }

  navigateToCategory(category: string) {
    this.router.navigate(['/menu', category]);
  }
}
