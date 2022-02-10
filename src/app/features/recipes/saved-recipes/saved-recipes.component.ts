import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Recipe } from 'src/app/models/recipe.model';
import { AuthService } from 'src/app/services/auth.service';
import { DatabaseService } from 'src/app/services/database.service';
import { EditRecipeComponent } from './edit-recipe/edit-recipe.component';

@Component({
  selector: 'app-saved-recipes',
  templateUrl: './saved-recipes.component.html',
  styleUrls: ['./saved-recipes.component.scss'],
})
export class SavedRecipesComponent implements OnInit {
  recipeList: Recipe[] = [];

  constructor(private db: DatabaseService, private dialog: MatDialog) {}

  ngOnInit(): void {
    // this.getRecipes()
  }

  getRecipes(form: NgForm) {
    form.reset();
    this.db.getRecipeList().subscribe((data: any) => {
      Object.values(data).map((returnData: any) => {
        this.recipeList.push(returnData);
      });
    });
  }

  onEdit() {
    this.dialog.open(EditRecipeComponent, {
      width: '700px',
      height: '850px',
    });
  }

  onDelete(index: any) {}
}
