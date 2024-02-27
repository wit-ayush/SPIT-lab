import { Component, ElementRef, ViewChild } from '@angular/core';
import { IonFabList, IonFab, IonFabButton, IonIcon, IonHeader, IonToolbar, IonTitle, IonContent, IonLabel, IonItemDivider } from '@ionic/angular/standalone';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import Swiper from 'swiper';
import { CommonModule } from '@angular/common';
import { addIcons } from 'ionicons';
import { arrowUp } from 'ionicons/icons';
// import { SideMenuPage } from '../side-menu/side-menu.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [ IonLabel, IonItemDivider, IonFabList, IonFab, IonFabButton, IonIcon, IonHeader, IonToolbar, IonTitle, IonContent, CommonModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class homePage {
  @ViewChild(IonContent, {static: false}) content!: IonContent;

  @ViewChild('swiper')
  swiperRef: ElementRef | undefined;
  swiper ?: Swiper;
  images= [
    'https://www.spit.ac.in/wp-content/uploads/2009/11/Entrance.jpg',
    'https://shiksha-static-mediadata.s3.ap-southeast-1.amazonaws.com/mediadata/reviewDocument/images/1689199932157WhatsAppImage2023-07-12at00.10.20.jpg',
    'https://tse2.mm.bing.net/th?id=OIP.t2rb4VnhKaGRKA45ptVNogHaEu&pid=Api&P=0&h=180',
    'https://tse4.mm.bing.net/th?id=OIP.642AhjV3eOD4gHBSSsTEqAHaE8&pid=Api&P=0&h=180',
    'https://tse1.mm.bing.net/th?id=OIP.wN228DGKWKcIm2982FCmyAHaEQ&pid=Api&P=0&h=180',
    'https://www.spit.ac.in/wp-content/uploads/2022/01/highlight-of-fdp.jpg',
    'https://www.spit.ac.in/wp-content/uploads/2020/02/4_VESIMs1.png',
    'https://tse3.mm.bing.net/th?id=OIP.1T0mhjrQi_tHUzWOxS-JlAHaE7&pid=Api&P=0&h=180'
  ]



  constructor() {
    addIcons({arrowUp})
  }
  swiperSlideChanged(e: any) {
    console.log("Changed: ", e);
  }
  swiperReady(){
    this.swiper = this.swiperRef?.nativeElement.swiper;
  }


  ScrollToTop(){
    this.content.scrollToTop(1000);
  }
}

