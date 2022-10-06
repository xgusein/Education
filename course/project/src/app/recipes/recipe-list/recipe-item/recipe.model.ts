import { Ingredient } from "src/app/shared/ingredient.model";
export class Recipe {
  public name: string;
  public desciption: string;
  public imagePath: string;
  public ingredients: Ingredient;

  constructor(name: string, desc: string, imgePath: string, ingredients: Ingredient[]) {
    this.name = name;
    this.desciption = desc;
    this.imagePath = imagePath;
  }
}
