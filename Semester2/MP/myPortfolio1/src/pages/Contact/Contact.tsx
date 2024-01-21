import React from 'react';
import {
  IonButtons,
  IonContent,
  IonHeader,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar,
  IonList,
  IonItem,
  IonLabel,
  IonIcon,
} from '@ionic/react';
import { useParams } from 'react-router';
import { mail, call, logoLinkedin, logoGithub, logoTwitter } from 'ionicons/icons'; // Import icons from Ionicons
import './Contact.css';

const Contact: React.FC = () => {
  const { name } = useParams<{ name: string }>();

  // Placeholder contact information
  const contactInfo = {
    email: 'ayush.tripathi23@spit.ac.in',
    phone: '+91 9137390941',
    linkedin: 'https://www.linkedin.com/tripathi-ayush/',
    github: 'https://github.com/wit-ayush/',
    twitter: 'https://twitter.com/wit_ayush',
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle><h2>Contact Information</h2></IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent className="contact-content" fullscreen>
        <IonList className="contact-list" style={{ width: '95%', margin: '18px' }}>
          <IonItem>
            <IonIcon slot="start" icon={mail} />
            <IonLabel style={{ width: '40%', textAlign: 'left' }}>Email:</IonLabel>
            <IonLabel style={{ width: '60%', textAlign: 'left' }}>{contactInfo.email}</IonLabel>
          </IonItem>

          <IonItem>
            <IonIcon slot="start" icon={call} />
            <IonLabel style={{ width: '40%', textAlign: 'left' }}>Phone:</IonLabel>
            <IonLabel style={{ width: '60%', textAlign: 'left' }}>{contactInfo.phone}</IonLabel>
          </IonItem>

          <IonItem button href={contactInfo.linkedin} target="_blank">
            <IonIcon slot="start" icon={logoLinkedin} />
            <IonLabel style={{ width: '40%', textAlign: 'left' }}>LinkedIn:</IonLabel>
            <IonLabel style={{ width: '60%', textAlign: 'left' }}>{contactInfo.linkedin}</IonLabel>
          </IonItem>

          <IonItem button href={contactInfo.github} target="_blank">
            <IonIcon slot="start" icon={logoGithub} />
            <IonLabel style={{ width: '40%', textAlign: 'left' }}>GitHub:</IonLabel>
            <IonLabel style={{ width: '60%', textAlign: 'left' }}>{contactInfo.github}</IonLabel>
          </IonItem>

          <IonItem button href={contactInfo.twitter} target="_blank">
            <IonIcon slot="start" icon={logoTwitter} />
            <IonLabel style={{ width: '40%', textAlign: 'left' }}>Twitter:</IonLabel>
            <IonLabel style={{ width: '60%', textAlign: 'left' }}>{contactInfo.twitter}</IonLabel>
          </IonItem>
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Contact;
