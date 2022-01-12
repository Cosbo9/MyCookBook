import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { SignUpComponent } from './features/auth/sign-up/sign-up.component';
import { HomeComponent } from './features/home/home.component';
import { NewRecipeComponent } from './features/recipes/new-recipe/new-recipe.component';
import { MaterialTestsComponent } from './material/material-tests/material-tests.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'new-recipe', component: NewRecipeComponent },
  { path: 'mat-test', component: MaterialTestsComponent },
  { path: 'sign-up', component: SignUpComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
