import { Component, Input, Output, EventEmitter } from '@angular/core';
import { IonIcon } from '@ionic/angular/standalone';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { addIcons } from 'ionicons';
import { star } from 'ionicons/icons';

@Component({
  selector: 'app-star-rating',
  templateUrl: './star-rating.component.html',
  styleUrls: ['./star-rating.component.scss'],
  standalone: true,
  imports: [IonIcon, FormsModule, CommonModule]
})

export class StarRatingComponent {
  constructor() { addIcons({ star }) }
  
  @Input() rating: number = 0;
  @Output() ratingChange: EventEmitter<number> = new EventEmitter<number>();

  rate(index: number): void {
    this.rating = index + 1;
    this.ratingChange.emit(this.rating);
  }

  getColor(index: number): string {
    return index + 1 <= this.rating ? 'gold' : 'gray';
  }
}
