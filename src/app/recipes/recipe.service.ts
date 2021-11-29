import { EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { Recipe } from './recipe.model';

export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();
  private recipes: Recipe[] = [
    new Recipe(
      'Baharat Chicken With Batata Harra And Sumac Yoghurt',
      "Combining crispy baharat spiced chicken thighs with 'batata harra' – a tasty Middle Eastern potato dish seasoned with lemon, fresh herbs and rich spices – this dish is packed with flavour. Served with green beans and a dollop of zingy sumac yoghurt to the side.",
      'https://production-media.gousto.co.uk/cms/mood-image/1308---Crispy-Baharat-Chicken--Spiced-Potatoes-x700.jpg',
      [
        new Ingredient('Tomato', 2),
        new Ingredient('Fries', 2),
        new Ingredient('Meat', 2),
      ]
    ),

    new Recipe(
      'Chicken, Date & Tamarind Curry With Kachumber',
      "to create a luxurious chicken curry, you'll infuse rich coconut stock with sweet dates, ginger and tangy tamarind. Serve over buttery basmati rice with a cucumber, tomato and coriander salad.",
      'https://production-media.gousto.co.uk/cms/mood-image/687---Chicken-Date--Tamarind-Curry_01-1592819703164-x700.jpg',
      [
        new Ingredient('Chicken', 12),
        new Ingredient('Tomato', 5),
        new Ingredient('Lettuce', 23),
      ]
    ),
  ];
  getRecipes() {
    return this.recipes.slice();
  }
}
