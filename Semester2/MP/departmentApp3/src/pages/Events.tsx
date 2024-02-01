// src/pages/Events.tsx

import React from 'react';
import {
  IonContent,
  IonPage,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonButton,
  IonIcon,
  IonList,
  IonItem,
  IonLabel,
  IonHeader,
  IonToolbar,
  IonTitle,
} from '@ionic/react';
import { calendar, arrowForward, globe } from 'ionicons/icons';

const eventsData = [
  {
    organizer: 'John Doe',
    eventName: 'Art Exhibition Opening',
    details: 'Join us for the grand opening of our latest art exhibition.',
    time: '2024-01-30T18:00:00',
    webUrl: 'https://example.com/art-exhibition',
  },
  {
    organizer: 'Jane Smith',
    eventName: 'Educational Workshop: Physics Basics',
    details: 'Learn the fundamental principles of physics in this interactive workshop.',
    time: '2024-02-15T14:30:00',
    webUrl: 'https://example.com/physics-workshop',
  },
  {
    organizer: 'Bob Johnson',
    eventName: 'Literary Symposium: Modern Literature Trends',
    details: 'Explore the latest trends in modern literature with renowned authors.',
    time: '2024-03-05T16:45:00',
    webUrl: 'https://example.com/literary-symposium',
  },
  {
    organizer: 'Emily White',
    eventName: 'Mathematics Olympiad 2024',
    details: 'Participate in the prestigious Mathematics Olympiad and showcase your skills.',
    time: '2024-04-20T09:00:00',
    webUrl: 'https://example.com/math-olympiad',
  },
  {
    organizer: 'David Brown',
    eventName: 'Computer Science Seminar: Emerging Technologies',
    details: 'Stay updated on the latest trends in computer science and emerging technologies.',
    time: '2024-05-10T11:30:00',
    webUrl: 'https://example.com/cs-seminar',
  },
  {
    organizer: 'Sophie Green',
    eventName: 'History Lecture Series: Ancient Civilizations',
    details: 'Embark on a journey through the history of ancient civilizations in this lecture series.',
    time: '2024-06-01T19:00:00',
    webUrl: 'https://example.com/history-lecture',
  },
];


const Events: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Events</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList>
          {eventsData.map((event, index) => (
            <IonCard key={index}>
              <IonCardHeader>
                <IonCardTitle>{event.eventName}</IonCardTitle>
              </IonCardHeader>
              <IonCardContent>
                <IonItem>
                  <IonLabel>
                    <h2>{event.organizer}</h2>
                    <p>{event.details}</p>
                    <p>{new Date(event.time).toLocaleString()}</p>
                  </IonLabel>
                </IonItem>
                <IonButton
                  expand="full"
                  href={event.webUrl}
                  // target="_blank"
                >
                  <IonIcon slot="start" icon={globe} /> {/* Icon for better indication */}
                  View More
                  <IonIcon slot="end" icon={arrowForward} />
                </IonButton>
              </IonCardContent>
            </IonCard>
          ))}
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Events;
