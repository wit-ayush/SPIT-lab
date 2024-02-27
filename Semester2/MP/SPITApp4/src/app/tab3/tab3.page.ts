import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Browser } from '@capacitor/browser'
// import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})

export class Tab3Page {
  constructor() { }

  webviewUrl: string = 'https://www.spit.ac.in/2023/06/12/announcements/';

  public notifications = [
    {
      event: 'PhD Application form',
      src: 'https://docs.google.com/forms/d/e/1FAIpQLSeutHx9TS7gAxC-Ws3fv1YzsmAZGEr8j6JXQhL-SeE59hQXwQ/viewform'
    },
    {
      event: 'PhD Admission 2023-24',
      src: 'https://www.spit.ac.in/wp-content/uploads/2024/02/PhD-Advertisment-notice-2023-24.pdf'
    },
    {
      event: 'Recruitment Advertisement',
      src: 'https://www.spit.ac.in/wp-content/uploads/2024/02/PhD-Advertisment-notice-2023-24.pdf'
    },
    {
      event: 'Recruitment for Faculty Positions',
      src: 'https://www.spit.ac.in/wp-content/uploads/2024/02/PhD-Advertisment-notice-2023-24.pdf'
    },
    {
      event: 'Recruitment for Professor of Practice',
      src: 'https://www.spit.ac.in/wp-content/uploads/2024/02/PhD-Advertisment-notice-2023-24.pdf'
    },
    {
      event: 'Recruitment for Technical Staff',
      src: 'https://www.spit.ac.in/wp-content/uploads/2024/02/PhD-Advertisment-notice-2023-24.pdf'
    },
    {
      event: 'Vacancy Notice for Direct Second Year 23-24 at 12 noon',
      src: 'https://www.spit.ac.in/wp-content/uploads/2024/02/PhD-Advertisment-notice-2023-24.pdf'
    },

  ]


  async openWebView() {
    await Browser.open({ url: 'https://www.spit.ac.in/2023/06/12/announcements/' });
  }


  // getSafeUrl() {
  //   return this.sanitizer.bypassSecurityTrustResourceUrl(this.webviewUrl);
  // }

  // openWebView() {
  //   // Open the link in the iframe
  //   this.webviewUrl = 'https://www.spit.ac.in/2023/06/12/announcements/';
  // }
}
