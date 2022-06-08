import * as EventEmitter from "events";
import { Ingredient } from "src/app/shared/ingredient.model";
import { ShoppingListService } from "src/app/shopping-list/shopping-list.service";
import { Recipe } from "../recipe.component";

export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe('FSDSL','FSFSFSFS','FSFSFS'[
      new Ingredient('Meat',1),
      new Ingredient('French Frises',20),
    ]),
    new Recipe('FSDSL','FSFSFSFS','FSFSFS'[
      new Ingredient('Meat',1),
      new Ingredient('French Frises',20),
    ] )
  ];

  constructor(private slService: ShoppingListService) {

  }

  getRecipes() {
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }

}
