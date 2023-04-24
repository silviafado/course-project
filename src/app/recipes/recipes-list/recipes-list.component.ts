import { Component, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is simply a test', '../../../assets/test-recipe.jpeg')
  ];

  constructor() {}

  ngOnInit() {}

  onRecipeSelected(recipe: Recipe){
    this.recipeWasSelected.emit();
  }

}
