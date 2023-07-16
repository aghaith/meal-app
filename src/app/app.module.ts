import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { MenuComponent } from './components/menu/menu.component';
import { FavouritesComponent } from './components/favourites/favourites.component';
import { MealGeneratorComponent } from './components/meal-generator/meal-generator.component';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { CategoryComponent } from './components/category/category.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'menu', component: MenuComponent },
  { path: 'favourites', component: FavouritesComponent },
  { path: 'meal-generator', component: MealGeneratorComponent },
  { path: 'about-me', component: AboutMeComponent },
  { path: 'menu/:category', component: CategoryComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuComponent,
    FavouritesComponent,
    MealGeneratorComponent,
    AboutMeComponent,
    CategoryComponent,
  ],
  imports: [BrowserModule, HttpClientModule, RouterModule.forRoot(routes)],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
