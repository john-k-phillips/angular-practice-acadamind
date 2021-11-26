import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      'Test Recipe',
      'This is a test recipe.',
      'https://production-media.gousto.co.uk/cms/mood-image/1308---Crispy-Baharat-Chicken--Spiced-Potatoes-x700.jpg'
    ),
  ];

  constructor() {}

  ngOnInit(): void {}
}
