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
import { logoGithub, logoLinkedin, codeSharp, codeSlash } from 'ionicons/icons'; // Import icons from Ionicons
import './Links.css';

const Links: React.FC = () => {

  // Links for specific coding platforms
  const codingPlatforms = [
    { name: 'LeetCode', icon: codeSharp, link: 'https://leetcode.com/wit-ayush/' },
    { name: 'GitHub', icon: logoGithub, link: 'https://github.com/wit-ayush/' },
    { name: 'LinkedIn', icon: logoLinkedin, link: 'https://www.linkedin.com/tripathi-ayush/' },
    { name: 'HackerRank', icon: codeSlash, link: 'https://www.hackerrank.com/wit_ayush' },
  ];

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle><h2>Coding Platforms, I'm on!</h2></IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent className="links-content" fullscreen>
        <IonList className="links-list" style={{ padding: '24px' }}>
          {codingPlatforms.map((platform, index) => (
            <IonItem key={index} button href={platform.link} target="_blank" style={{ padding: '8px' }}>
              <IonIcon slot="start" icon={platform.icon} />
              <IonLabel style={{color: '#0000EE'}}>{platform.name}</IonLabel>
            </IonItem>
          ))}
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Links;
