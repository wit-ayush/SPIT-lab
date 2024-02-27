// import { CommonModule } from '@angular/common';
// import { Component } from '@angular/core';
// import { RouterLink, RouterLinkActive } from '@angular/router';
// import { IonicModule } from '@ionic/angular';
// import { IonRouterOutlet } from '@ionic/angular/standalone';
// import { addIcons } from 'ionicons';
// import {register} from 'swiper/element/bundle';
// import { heartOutline, mailOutline, paperPlane, paperPlaneOutline, archiveOutline, trashOutline, warningOutline, homeOutline, peopleOutline } from 'ionicons/icons';
// // import { SideMenuPage } from './side-menu/side-menu.page';
// import { AngularFireModule } from '@angular/fire/compat';
// import { AngularFireAuthModule } from '@angular/fire/compat/auth'
// import { environment } from 'src/environments/environment';

// register();
// @Component({
//   selector: 'app-root',
//   templateUrl: 'app.component.html',
//   styleUrls: ['app.component.scss'],
//   standalone: true,
//   imports: [ IonRouterOutlet, IonicModule, RouterLink, CommonModule, RouterLinkActive, AngularFireModule.initializeApp(environment.firebaseConfig), AngularFireAuthModule ],
// })
// export class AppComponent {

//   selectedPath = '';

//   constructor() { addIcons({ heartOutline, mailOutline, paperPlane, paperPlaneOutline, archiveOutline, trashOutline, warningOutline, homeOutline, peopleOutline })}

//   public appPages = [
//     { title: 'Home', url: './tabs/home', icon: 'home' },
//     { title: 'Faculties', url: './tabs/tab2', icon: 'people' },
//     { title: 'Notifications', url: './tabs/tab3', icon: 'heart' },
//     { title: 'Feedback', url: './tabs/tab4', icon: 'archive' },
//     { title: 'Rules', url: '/tabs/rules', icon: 'trash' },
//     { title: 'Signout', url: '/folder/spam', icon: 'paper-plane' },
//   ];

// }


import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { addIcons } from 'ionicons';
import { register } from 'swiper/element/bundle';
import { RouterLink } from '@angular/router';
import {sunny, moon, toggleOutline, heartOutline, mailOutline, paperPlane, paperPlaneOutline, archiveOutline, trashOutline, warningOutline, homeOutline, peopleOutline } from 'ionicons/icons';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { ThemeService } from './theme.service';
import { initializeApp } from 'firebase/app';
import { environment } from 'src/environments/environment';

register();

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: true,
  imports: [
    IonicModule, 
    CommonModule,
    // AngularFireModule.initializeApp(environment.firebaseConfig),
    RouterLink, 
    AngularFireModule,
   AngularFireAuthModule],
})

export class AppComponent {
  selectedPath = '';
  constructor(public themeService: ThemeService) {
    addIcons({sunny, moon, toggleOutline, heartOutline, mailOutline, paperPlane, paperPlaneOutline, archiveOutline, trashOutline, warningOutline, homeOutline, peopleOutline });
    this.themeService.isDarkMode$.subscribe((darkMode) => {
      document.body.classList.toggle('dark', darkMode);
    });
  }

  // toggleTheme() {
  //   this.themeService.toggleDarkMode();
  // } 
  
  toggleTheme(event: CustomEvent) {
    const darkModeEnabled = event.detail.checked;
    this.themeService.setDarkMode(darkModeEnabled);
  }

  public appPages = [
    { title: 'Home', url: './tabs/home', icon: 'home' },
    { title: 'Faculties', url: './tabs/tab2', icon: 'people' },
    { title: 'Notifications', url: './tabs/tab3', icon: 'heart' },
    { title: 'Feedback', url: './tabs/tab4', icon: 'archive' },
    { title: 'Rules', url: '/tabs/rules', icon: 'trash' },
    { title: 'Signout', url: 'login/', icon: 'paper-plane' },
  ];
}
