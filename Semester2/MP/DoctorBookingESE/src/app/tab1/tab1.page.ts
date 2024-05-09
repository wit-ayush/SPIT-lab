import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MainService } from '../main.service';

export interface BookingStructue {
  name: string;
  address: string;
  age: string;
  contact: string;
  symptoms: string;
  doctor: string;
  dateOfVisit: string;
}

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(private service: MainService) {
  }
  bookAppointment(form: NgForm) {
    this.service.addBooking(form.value);
    this.presentAlert();
  }
  async presentAlert() {
    const alert = document.createElement('ion-alert');
    alert.header = 'Success';
    alert.message = 'Data has updated!';
    alert.buttons = ['OK'];
    document.body.appendChild(alert);
    await alert.present();
    await alert.onDidDismiss();
  }
}
