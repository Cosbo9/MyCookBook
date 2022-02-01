import { Component, OnInit } from '@angular/core';
import { DatabaseService } from 'src/app/services/database.service';

@Component({
  selector: 'app-saved-recipes',
  templateUrl: './saved-recipes.component.html',
  styleUrls: ['./saved-recipes.component.scss']
})
export class SavedRecipesComponent implements OnInit {
  recipeList: any[] = []


  constructor(private db: DatabaseService) { }

  ngOnInit(): void {
    this.getRecipes()
  }

  getRecipes() {
    this.db.getRecipeList().subscribe((data: any) => {
      console.log(data)
      Object.values(data).map((data) => {
        console.log(data)
        this.recipeList.push(data)
      })
    })
  }

}
