import { Component } from '@angular/core';
import { SideMenuPage } from '../side-menu/side-menu.page';
import { IonAccordion, IonAccordionGroup, IonButtons, IonCard, IonCardContent, IonCardHeader, IonContent, IonHeader, IonItem, IonItemDivider, IonItemGroup, IonLabel, IonList, IonMenuButton, IonTitle, IonToolbar, IonIcon, IonButton } from '@ionic/angular/standalone';
import { CommonModule } from '@angular/common';
import { Browser } from '@capacitor/browser';

@Component({
  selector: 'app-events',
  templateUrl: './tab5.page.html',
  standalone: true,
  styleUrls: ['./tab5.page.scss'], 
  imports: [SideMenuPage, IonList, IonAccordionGroup, IonAccordion, IonItemGroup, CommonModule, IonItemDivider, IonLabel, IonItem, IonCardContent, IonCardHeader, IonButtons, IonMenuButton, IonCard, IonHeader, IonToolbar, IonTitle, IonIcon, IonContent, IonButton]
})
export class Tab5Page {
  departments = [
    {
      name: 'Computer Science and Engineering',
      expanded:false,
      events: [
        {
          organizer: 'John Doe',
          eventName: 'Web Development Workshop',
          details: 'Learn the latest web development technologies.',
          time: '2024-02-10T14:00:00',
          webUrl: 'https://spit.ac.in/web-development-workshop',
          showDetails: false
        },
        {
          organizer: 'Jane Smith',
          eventName: 'Robotics Competition',
          details: 'Participate in a thrilling robotics competition.',
          time: '2024-03-20T09:30:00',
          webUrl: 'https://spit.ac.in/robotics-competition',
          showDetails: false
        },
        {
          organizer: 'Bob Johnson',
          eventName: 'Data Science Symposium',
          details: 'Explore the latest trends in data science.',
          time: '2024-04-15T10:00:00',
          webUrl: 'https://spit.ac.in/data-science-symposium',
          showDetails: false
        },
        // Add more events for Computer Science and Engineering
      ]
    },
    {
      name: 'Electrical Engineering',
      expanded:false,
      events: [
        {
          organizer: 'Jane Smith',
          eventName: 'Robotics Competition',
          details: 'Participate in a thrilling robotics competition.',
          time: '2024-03-20T09:30:00',
          webUrl: 'https://spit.ac.in/robotics-competition',
          showDetails: false
        },
        {
          organizer: 'John Doe',
          eventName: 'Web Development Workshop',
          details: 'Learn the latest web development technologies.',
          time: '2024-02-10T14:00:00',
          webUrl: 'https://spit.ac.in/web-development-workshop',
          showDetails: false
        },
        {
          organizer: 'Bob Johnson',
          eventName: 'Data Science Symposium',
          details: 'Explore the latest trends in data science.',
          time: '2024-04-15T10:00:00',
          webUrl: 'https://spit.ac.in/data-science-symposium',
          showDetails: false
        },
        // Add more events for Electrical Engineering
      ]
    },
    {
      name: 'Masters in Computer Applications',
      expanded:false,
      events: [
        {
          organizer: 'Bob Johnson',
          eventName: 'Data Science Symposium',
          details: 'Explore the latest trends in data science.',
          time: '2024-04-15T10:00:00',
          webUrl: 'https://spit.ac.in/data-science-symposium',
          showDetails: false
        },
        {
          organizer: 'Jane Smith',
          eventName: 'Robotics Competition',
          details: 'Participate in a thrilling robotics competition.',
          time: '2024-03-20T09:30:00',
          webUrl: 'https://spit.ac.in/robotics-competition',
          showDetails: false
        },
        {
          organizer: 'John Doe',
          eventName: 'Web Development Workshop',
          details: 'Learn the latest web development technologies.',
          time: '2024-02-10T14:00:00',
          webUrl: 'https://spit.ac.in/web-development-workshop',
          showDetails: false
        },
        // Add more events for Masters in Computer Applications
      ]
    },
  ];

  constructor() {}

  onDepartmentChange(department: any) {
    department.expanded = !department.expanded;
  }

  async openEventUrl(url: string){
    await Browser.open({ url});
  }
}
