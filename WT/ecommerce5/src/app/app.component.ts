import { Component } from '@angular/core';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  data = [
    {
      id: 1,
      name:'Great Hat',
      price: 105,
    },
    {
      id: 2,
      name: 'Dead Sea',
      price: 106,
    },
    {
      id: 3,
      name: 'ruchi',
      price: 109,
    },
    {
      id: 4,
      name: 'Loui katan',
      price: 201,
    },
    {
      id: 5,
      name: 'Janardhan',
      price: 205,
    },
    {
      id: 6,
      name: 'Peter Japan',
      price: 265,
    },
    {
      id: 7,
      name: 'Layvis',
      price: 800,
    },
  ];
  total = 0
  cart = [
    {
      id: 0,
      name:'',
      price: 0,
    },
  ]
  
  handleaddtocart(id: number,name: string, price: number ) {
    this.cart.push(
      {
        id: id,
        name:name,
        price: price,
      }
    )
    this.total = this.total + price
  }

  handleclearcart() {
    this.cart =  [
      {
        id: 0,
        name:'',
        price: 0,
      },
    ]
    this.total = 0;
  }

  handleremovetocart(id: number, price: number ) {
    var tempcart = this.cart.filter(item => item.id != id)
    this.cart = tempcart
    if (this.total > 0) {
      this.total = this.total - price      
    } else{
      this.total = 0
    }
  }
}
