import { Component, OnInit } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';

@Component({
  selector: 'app-new-recipe',
  templateUrl: './new-recipe.component.html',
  styleUrls: ['./new-recipe.component.scss']
})
export class NewRecipeComponent implements OnInit {
  ingredients: any[] = ['']

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(data: NgForm) {
    console.log(data.form.value.recipeName)
    console.log(data.form.value.ingredient)
  }

  addIngredient(index: any) {
    this.ingredients.push(index)
  }

  removeIngredient(index: any) {
    this.ingredients.splice(index, 1)
  }

}
