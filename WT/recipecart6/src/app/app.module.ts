import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FormsModule } from '@angular/forms';  
import { MatTabsModule } from '@angular/material/tabs';
import { RecipeComponent } from './recipe/recipe.component';
import { CartComponent } from './cart/cart.component';  
      
@NgModule({
  declarations: [
    AppComponent,
    RecipeComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,  
    MatTabsModule, 
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

