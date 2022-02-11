import { Ingredient } from './ingredient.model';

export class Recipe {
    public recipeName: string;
    public description: string;
    public imagePath: string;
    public ingredientNames: any;
    public ingredientAmt: string;

    constructor(
        name: string,
        desc: string,
        imagePath: string,
        ingredients: string,
        ingredientAmt: string
    ) {
        this.recipeName = name;
        this.description = desc;
        this.imagePath = imagePath;
        this.ingredientNames = ingredients;
        this.ingredientAmt = ingredientAmt
    }
}
