import { Component } from '@angular/core';
import { BookingStructue } from '../tab1/tab1.page';
import { MainService } from '../main.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  constructor(private mainService: MainService) {}
  bookingsdata: BookingStructue[] = [];
  ngOnInit() {
    this.loadBookings();
  }
  loadBookings() {
    this.mainService.getBookings().subscribe((data: BookingStructue[]) => {
      this.bookingsdata = data;
    });
  }
}
