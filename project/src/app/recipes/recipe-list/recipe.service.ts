import { Injectable } from "@angular/core";
import { Ingredient } from "src/app/shared/ingredient.model";
import { ShoppingListService } from "src/app/shopping-list/shopping-list.service";
import { Recipe } from "../recipe.component";

@Injectable()
export class RecipeService {

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

  getRecipe(id: number) {
    return this.recipes[index];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }

}
