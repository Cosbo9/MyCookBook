import { Ingredient } from './ingredient.model';

export class Recipe {
    public name: string;
    public description: string;
    public imagePath: string;
    public ingredients: any;
    public ingredientAmt: string;

    constructor(
        name: string,
        desc: string,
        imagePath: string,
        ingredients: string,
        ingredientAmt: string
    ) {
        this.name = name;
        this.description = desc;
        this.imagePath = imagePath;
        this.ingredients = ingredients;
        this.ingredientAmt = ingredientAmt
    }
}
