// calculator.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent {
  screenValue: string = '0';
  handleButtonClick(value: string) {
    switch (value) {
      case 'clear':
        this.screenValue = '0';        
        break;
      case '=':
        try {
          this.screenValue = eval(this.screenValue).toString();
        } catch (error) {
          this.screenValue = 'Error';
        }
        break;
      case '+' :
        this.screenValue += value;
        break
      case '-' :
        this.screenValue += value;
        break
      case '*' :
        this.screenValue += value;
        break
      case '/' :
        this.screenValue += value;
        break
      default:
        if (this.screenValue === '0' || this.screenValue === 'Error') {
          this.screenValue = value;
        } else {
          this.screenValue += parseInt(value);
        }
        break;
    }
    console.log(this.screenValue)
  }
}

