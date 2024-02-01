import MessageListItem from '../components/MessageListItem';
import { useState } from 'react';
import { Message, getMessages, getUpcomingEvents } from '../data/messages'; // Import the necessary data and types
import {
  IonContent,
  IonHeader,
  IonList,
  IonPage,
  IonRefresher,
  IonRefresherContent,
  IonTitle,
  IonToolbar,
  useIonViewWillEnter
} from '@ionic/react';
import './Home.scss';

const Home: React.FC = () => {

  const [messages, setMessages] = useState<Message[]>([]);
  const [upcomingEvents, setUpcomingEvents] = useState<Message[]>([]);

  useIonViewWillEnter(() => {
    const msgs = getMessages();
    const events = getUpcomingEvents();
    setMessages(msgs);
    setUpcomingEvents(events);
  });

  const refresh = (e: CustomEvent) => {
    setTimeout(() => {
      e.detail.complete();
    }, 3000);
  };

  return (
    <IonPage id="home-page">
      <IonHeader>
        <IonToolbar>
          <IonTitle>Event Details</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonRefresher slot="fixed" onIonRefresh={refresh}>
          <IonRefresherContent></IonRefresherContent>
        </IonRefresher>

        <IonHeader >
          <IonToolbar>
            <IonTitle>
              Event Lists
            </IonTitle>
          </IonToolbar>
        </IonHeader>

        <IonList>
          {messages.map(m => <MessageListItem key={m.id} message={m} />)}
        </IonList>

        <IonHeader>
          <IonToolbar>
            <IonTitle>Upcoming Events</IonTitle>
          </IonToolbar>
        </IonHeader>

        <IonList>
          {upcomingEvents.map(event => (
            <MessageListItem key={event.id} message={event} />
          ))}
        </IonList>

      </IonContent>
    </IonPage>
  );
};

export default Home;
