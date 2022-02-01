import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './features/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material-mods/material-mods.module';
import { MaterialTestsComponent } from './material/material-tests/material-tests.component';
import { ShoppingListComponent } from './features/shopping-list/shopping-list.component';
import { NewRecipeComponent } from './features/recipes/new-recipe/new-recipe.component';
import { HomeComponent } from './features/home/home.component';
import { environment } from '../environments/environment';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireModule } from '@angular/fire/compat';
import { LoginDialogComponent } from './features/auth/login-dialog/login-dialog.component';
import { SignUpComponent } from './features/auth/sign-up/sign-up.component';
import { SavedRecipesComponent } from './features/recipes/saved-recipes/saved-recipes.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MaterialTestsComponent,
    ShoppingListComponent,
    NewRecipeComponent,
    HomeComponent,
    LoginDialogComponent,
    SignUpComponent,
    SavedRecipesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    HttpClientModule,
    AngularFireAuthModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
