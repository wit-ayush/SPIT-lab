import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule, NavController } from '@ionic/angular';
import { RouterLink } from '@angular/router';
import { addIcons } from 'ionicons';
import { heartOutline, mailOutline, paperPlane, paperPlaneOutline, archiveOutline, trashOutline, warningOutline } from 'ionicons/icons';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.page.html',
  styleUrls: ['./side-menu.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, RouterLink]
})
export class SideMenuPage implements OnInit {

  constructor(public navCtrl: NavController) {
    addIcons({ heartOutline, mailOutline, paperPlane, paperPlaneOutline, archiveOutline, 
      trashOutline, warningOutline })
  }


  ngOnInit() {
  }

  openPage(page: string) {
    this.navCtrl.navigateForward(page);
  }

  public appPages = [
    { title: 'Inbox', url: '/folder/inbox', icon: 'mail' },
    { title: 'Outbox', url: '/folder/outbox', icon: 'paper-plane' },
    { title: 'Favorites', url: '/folder/favorites', icon: 'heart' },
    { title: 'Archived', url: '/folder/archived', icon: 'archive' },
    { title: 'Trash', url: '/folder/trash', icon: 'trash' },
    { title: 'Spam', url: '/folder/spam', icon: 'warning' },
  ];

}
