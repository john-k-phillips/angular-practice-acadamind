import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { RecipeService } from '../recipes/recipe.service';

import { Recipe } from '../recipes/recipe.model';

@Injectable({ providedIn: 'root' })
export class DataStorageService {
  url =
    'https://ng-complete-guide-1c8cf-default-rtdb.europe-west1.firebasedatabase.app/';
  constructor(private http: HttpClient, private recipeService: RecipeService) {}

  storeRecipes() {
    const recipes = this.recipeService.getRecipes();
    this.http.put(`${this.url}recipes.json`, recipes).subscribe((response) => {
      console.log(response);
    });
  }

  fetchRecipes() {
    this.http.get<Recipe[]>(`${this.url}recipes.json`).subscribe((recipes) => {
      this.recipeService.setRecipes(recipes);
    });
  }
}
