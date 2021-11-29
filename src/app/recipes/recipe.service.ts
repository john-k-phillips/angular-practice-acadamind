import { EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';

export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();
  private recipes: Recipe[] = [
    new Recipe(
      'Test Recipe',
      'This is a test recipe.',
      'https://production-media.gousto.co.uk/cms/mood-image/1308---Crispy-Baharat-Chicken--Spiced-Potatoes-x700.jpg'
    ),

    new Recipe(
      'Test Recipe',
      'This is a test recipe.',
      'https://production-media.gousto.co.uk/cms/mood-image/1308---Crispy-Baharat-Chicken--Spiced-Potatoes-x700.jpg'
    ),
  ];
  getRecipes() {
    return this.recipes.slice();
  }
}
