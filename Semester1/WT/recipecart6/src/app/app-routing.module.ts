import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecipeComponent } from './recipe/recipe.component';
import { CartComponent } from './cart/cart.component';

const routes: Routes = [
  { path: 'recipe', component: RecipeComponent },
  // { path: 'cart', component: CartComponent },
  { path: '', redirectTo: '/recipe', pathMatch: 'full' }, // Default route
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
