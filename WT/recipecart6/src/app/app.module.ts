import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FormsModule } from '@angular/forms';  
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

import { RecipeComponent } from './recipe/recipe.component';
import { CartComponent } from './cart/cart.component';  

import { CartService } from './cart.service';

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
    MatCardModule,
    MatTabsModule,
    MatIconModule, 
    BrowserAnimationsModule
  ],
  providers: [CartService],
  bootstrap: [AppComponent]
})
export class AppModule { }

