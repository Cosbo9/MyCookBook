import { Component, OnInit } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';
import { Ingredient } from 'src/app/models/ingredient.model';
import { DatabaseService } from 'src/app/services/database.service';

@Component({
  selector: 'app-new-recipe',
  templateUrl: './new-recipe.component.html',
  styleUrls: ['./new-recipe.component.scss'],
})
export class NewRecipeComponent implements OnInit {
  ingredients: any[] = [];

  constructor(private db: DatabaseService) { }

  ngOnInit(): void { }

  onSave(data: NgForm) {
    if (data.value.ingredientNames) {
      let ingredientInfo = {
        name: data.value.ingredientNames,
        amount: data.value.ingredientAmt,
        measurement: data.value.measurement,
      };
      this.ingredients.push(ingredientInfo);
      data.reset()
    } else {
      alert('Please enter an ingredient name!')
    }
  }

  onSubmit(data: NgForm) {
    if (data.valid) {
      data.form.value.ingredientNames = this.ingredients;
      this.db.saveRecipe(data.form.value);
      data.reset();
    }
  }

  onCancel(form: NgForm) {
    form.reset();
    this.ingredients = [];
  }

  addIngredient() {
    this.ingredients.push('');
  }

  removeIngredient(index: number) {
    this.ingredients.splice(index, 1);
  }
}
