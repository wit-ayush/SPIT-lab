import { Component } from '@angular/core';
import { CartService } from '../cart.service';
import RecipeType from '../RecipeType';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})



export class RecipeComponent {
  constructor(private cartService: CartService) {}
  
  addToCart(recipe: RecipeType) {
    this.cartService.addToCart(recipe);
  }

  recipes: RecipeType[]  = [
    {
      name: 'Chocolate Cake',
      quantity: 1,
      price: 10.00,
      ingredients: ['Flour', 'Sugar', 'Cocoa Powder', 'Eggs', 'Milk'],
      description: 'A rich and decadent chocolate cake that will satisfy your sweet cravings. Perfect for celebrations and special occasions.',
      instructions: [
        'Preheat the oven to 350°F (175°C).',
        'In a large bowl, mix flour, sugar, and cocoa powder.',
        'Add eggs and milk, and beat until smooth.',
        'Pour the batter into a greased cake pan.',
        'Bake for 30-35 minutes, or until a toothpick comes out clean.'
      ],
      imageUrl: 'https://media.istockphoto.com/id/497959594/photo/fresh-cakes.jpg?s=612x612&w=0&k=20&c=T1vp7QPbg6BY3GE-qwg-i_SqVpstyHBMIwnGakdTTek=',
    },
    {
      name: 'Vanilla Cupcakes',
      quantity: 1,
      price: 8.00,
      ingredients: ['Flour', 'Sugar', 'Butter', 'Eggs', 'Vanilla Extract'],
      description: 'Light and fluffy vanilla cupcakes with a hint of natural vanilla flavor. Great for parties and gatherings.',
      instructions: [
        'Preheat the oven to 350°F (175°C).',
        'Cream butter and sugar. Add eggs one at a time, then vanilla.',
        'Mix in flour until just blended. Fill cupcake liners 2/3 full.',
        'Bake for 18-20 minutes, or until a toothpick comes out clean.'
      ],
      imageUrl: 'https://plus.unsplash.com/premium_photo-1672916806667-4db17f753e54?auto=format&fit=crop&q=60&w=600&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZGVzc2VydHxlbnwwfHwwfHx8MA%3D%3D',
    },
    {
      name: 'Strawberry Shortcake',
      quantity: 1,
      price: 9.50,
      ingredients: ['Strawberries', 'Shortcake Biscuits', 'Whipped Cream', 'Sugar'],
      description: 'A classic dessert featuring fresh strawberries, sweetened biscuits, and whipped cream. A delightful treat for summer.',
      instructions: [
        'Slice strawberries and mix with sugar. Let sit for 30 minutes.',
        'Slice shortcake biscuits in half. Spoon strawberries over the bottom half.',
        'Top with whipped cream and the other half of the biscuit.'
      ],
      imageUrl: 'https://images.unsplash.com/photo-1551024506-0bccd828d307?auto=format&fit=crop&q=60&w=600&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZGVzc2VydHxlbnwwfHwwfHx8MA%3D%3D',
    },
    {
      name: 'Lemon Bars',
      quantity: 1,
      price: 7.50,
      ingredients: ['Flour', 'Butter', 'Sugar', 'Eggs', 'Lemon Juice'],
      description: 'Tangy and sweet lemon bars with a buttery crust and zesty lemon filling. The perfect balance of flavors.',
      instructions: [
        'Mix flour, butter, and 1/4 cup sugar. Press into a greased pan and bake.',
        'Beat eggs, remaining sugar, and lemon juice. Pour over crust.',
        'Bake again until set. Dust with powdered sugar when cool.'
      ],
      imageUrl: 'https://plus.unsplash.com/premium_photo-1666702222560-ee56d8db4c0f?auto=format&fit=crop&q=60&w=600&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZGVzc2VydHxlbnwwfHwwfHx8MA%3D%3D',
    },
    {
      name: 'Red Velvet Cake',
      quantity: 1,
      price: 12.00,
      ingredients: ['Flour', 'Cocoa Powder', 'Buttermilk', 'Cream Cheese', 'Red Food Coloring'],
      description: 'A classic red velvet cake with a rich cream cheese frosting, perfect for special occasions. Elegant and delicious.',
      instructions: [
        'Mix flour and cocoa powder. Cream butter, sugar, and eggs.',
        'Add flour mixture and buttermilk, alternating. Add red food coloring.',
        'Bake in layers. Frost with cream cheese frosting.'
      ],
      imageUrl: 'https://plus.unsplash.com/premium_photo-1671980819443-e8bbeec85840?auto=format&fit=crop&q=60&w=600&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8ZGVzc2VydHxlbnwwfHwwfHx8MA%3D%3D',
    },
    {
      name: 'Apple Pie',
      quantity: 1,
      price: 11.00,
      ingredients: ['Apples', 'Pie Crust', 'Cinnamon', 'Sugar', 'Butter'],
      description: 'A comforting and aromatic apple pie with a flaky crust and spiced apple filling. A taste of home.',
      instructions: [
        'Peel, core, and slice apples. Mix with cinnamon and sugar.',
        'Line a pie dish with pie crust. Fill with apple mixture.',
        'Dot with butter and cover with a second pie crust. Bake until golden.'
      ],
      imageUrl: 'https://images.unsplash.com/photo-1508737804141-4c3b688e2546?auto=format&fit=crop&q=60&w=600&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGRlc3NlcnR8ZW58MHx8MHx8fDA%3D',
    },
  ];   
}
