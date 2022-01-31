import { Component, OnInit } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';
import { Ingredient } from 'src/app/models/ingredient.model';

@Component({
  selector: 'app-new-recipe',
  templateUrl: './new-recipe.component.html',
  styleUrls: ['./new-recipe.component.scss']
})
export class NewRecipeComponent implements OnInit {
  ingredients: any[] = []

  constructor() { }

  ngOnInit(): void {
  }

  onSave(data: any) {
    console.log(data.value)
    this.ingredients.push(data.value)
    console.log(this.ingredients)
  }

  onSubmit(data: NgForm) {
    console.log(data.form)
    console.log(this.ingredients)
    console.log(data.form.value)
  }

  addIngredient() {
    this.ingredients.push('')
  }

  removeIngredient(index: any) {
    this.ingredients.splice(index, 1)
  }

}
