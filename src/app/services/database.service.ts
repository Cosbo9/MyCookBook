import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Recipe } from '../models/recipe.model';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class DatabaseService {
  user: any;

  constructor(private http: HttpClient, private authService: AuthService) {
    this.authService.loggedInUser().subscribe((u) => {
      this.user = u?.uid;
    });
  }

  saveRecipe(recipe: Recipe) {
    this.http
      .post<Recipe>(
        `https://mycookbook-efbac-default-rtdb.firebaseio.com/${this.user}/recipes.json`,
        recipe
      )
      .subscribe();
  }

  getRecipeList() {
    return this.http.get<Recipe>(
      `https://mycookbook-efbac-default-rtdb.firebaseio.com/${this.user}/recipes.json`
    );
  }
}
