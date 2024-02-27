import { Component, EnvironmentInjector, inject } from '@angular/core';
import { IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel, IonMenuButton, IonButtons } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import {arrowBackOutline, arrowForwardOutline, triangle, ellipse, square, homeOutline, homeSharp, peopleOutline, peopleSharp, chatboxEllipsesOutline, chatboxEllipsesSharp, notificationsOutline, notificationsSharp } from 'ionicons/icons';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss'],
  standalone: true,
  imports: [IonTabs,IonButtons, IonTabBar, IonTabButton, IonIcon, IonLabel, IonMenuButton],
})

export class TabsPage {
  public environmentInjector = inject(EnvironmentInjector);

  constructor() {
    addIcons({ arrowBackOutline, arrowForwardOutline, triangle, ellipse, square, homeOutline, homeSharp, peopleOutline, peopleSharp, chatboxEllipsesOutline, chatboxEllipsesSharp, notificationsOutline, notificationsSharp  });
  }
}
