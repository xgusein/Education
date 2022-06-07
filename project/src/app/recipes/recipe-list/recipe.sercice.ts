import * as EventEmitter from "events";
import { Recipe } from "../recipe.component";

export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe('FSDSL','FSFSFSFS','FSFSFS'),
    new Recipe('FSDSL','FSFSFSFS','FSFSFS')
  ];

  getRecipes() {
    return this.recipes.slice();
  }

}
