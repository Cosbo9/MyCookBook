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

  constructor(private db: DatabaseService) {}

  ngOnInit(): void {}

  onSave(data: any) {
    if (data.value) {
      this.ingredients.push(data.value);
      data.value = '';
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
  }

  addIngredient() {
    this.ingredients.push('');
  }

  removeIngredient(index: any) {
    this.ingredients.splice(index, 1);
  }
}
