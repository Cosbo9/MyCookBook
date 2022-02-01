import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
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

  saveRecipe(recipe: any) {
    this.http
      .post(
        `https://mycookbook-efbac-default-rtdb.firebaseio.com/${this.user}/recipes.json`,
        recipe
      )
      .subscribe();
  }

  getRecipeList() {
    return this.http.get(
      `https://mycookbook-efbac-default-rtdb.firebaseio.com/${this.user}/recipes.json`
    );
  }
}
