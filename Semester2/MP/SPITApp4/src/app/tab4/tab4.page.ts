import { StarRatingComponent } from "../star-rating/star-rating.component";
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule, AlertController } from '@ionic/angular';


@Component({
  selector: "app-tabs4",
  templateUrl: "tab4.page.html",
  styleUrls: ['tab4.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, IonicModule, StarRatingComponent]
})

export class Tab4Page {
  name: string;
  email: string;
  feedback: string;
  selectedRating: number = 0;

  constructor(public alertController: AlertController) {
    this.name = '';
    this.email = '';
    this.feedback = '';
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Feedback Submitted',
      message: 'Thank you for your feedback!',
      buttons: ['OK'],
    });

    await alert.present();
  }

  async showAlert() {
    const alert = await this.alertController.create({
      header: 'Unable to submit the form',
      message: 'Fill all the fields',
      buttons: ['OK'],
    });
    await alert.present();
  };

  submitFeedback() {

    if (this.name && this.email && this.feedback !== '') {
      // Display the success alert
      this.presentAlert();
    } else {
      // Display the alert for incomplete form
      this.showAlert();
    }
  }
  
}