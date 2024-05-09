import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { BookingStructue } from './tab1/tab1.page';

@Injectable({
  providedIn: 'root'
})
export class MainService {

  constructor(private fireservice: AngularFirestore) {
  }
  
  addBooking(booking: any) {
    return this.fireservice.collection('booking').add(booking);
  }

  getBookings() {
    return this.fireservice.collection<BookingStructue>('booking').valueChanges();
  }
}
  