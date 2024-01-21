import {
  IonContent,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonMenu,
  IonMenuToggle,
  IonNote,
} from '@ionic/react';

import { useLocation } from 'react-router-dom';
import { archiveOutline, archiveSharp, bookmarkOutline, code, heartOutline, heartSharp, link } from 'ionicons/icons';
import './Menu.css';

interface AppPage {
  url: string;
  iosIcon: string;
  mdIcon: string;
  title: string;
}

const appPages: AppPage[] = [
  {
    title: 'Projects',
    url: '/folder/Projects',
    iosIcon: link,
    mdIcon: link
  },
  {
    title: 'Experience',
    url: '/folder/Experience',
    iosIcon: code,
    mdIcon: code
  },
  {
    title: 'Coding platform links',
    url: '/folder/Links',
    iosIcon: heartOutline,
    mdIcon: heartSharp
  },
  {
    title: 'Contact Details',
    url: '/folder/Contact',
    iosIcon: archiveOutline,
    mdIcon: archiveSharp
  }
];

const labels = ['MERN', 'MEAN', 'DJANGO', 'GraphQL', 'AWS', 'Quant Finance'];

const Menu: React.FC = () => {
  const location = useLocation();

  return (
    <IonMenu contentId="main" type="overlay">
      <IonContent>
        <IonList id="inbox-list">
          <IonListHeader>Ayush Tripathi</IonListHeader>
          <IonNote>ayush.tripathi23@spit.ac.in</IonNote>
          {appPages.map((appPage, index) => {
            return (
              <IonMenuToggle key={index} autoHide={false}>
                <IonItem className={location.pathname === appPage.url ? 'selected' : ''} routerLink={appPage.url} routerDirection="none" lines="none" detail={false}>
                  <IonIcon aria-hidden="true" slot="start" ios={appPage.iosIcon} md={appPage.mdIcon} />
                  <IonLabel>{appPage.title}</IonLabel>
                </IonItem>
              </IonMenuToggle>
            );
          })}
        </IonList>

        <IonList id="labels-list">
          <IonListHeader>Tech Stacks in Know</IonListHeader>
          {labels.map((label, index) => (
            <IonItem lines="none" key={index}>
              <IonIcon aria-hidden="true" slot="start" icon={bookmarkOutline} />
              <IonLabel>{label}</IonLabel>
            </IonItem>
          ))}
        </IonList>
      </IonContent>
    </IonMenu>
  );
};

export default Menu;
