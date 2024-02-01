import React from 'react';
import {
  IonCard,
  IonCardContent,
  IonItem,
  IonLabel,
  IonNote,
  IonImg
} from '@ionic/react';
import { Message } from '../data/messages';
import './MessageListItem.scss';

interface MessageListItemProps {
  message: Message;
}

const MessageListItem: React.FC<MessageListItemProps> = ({ message }) => {
  return (
    <IonCard color="light" style={{  }}>
      <IonCardContent style={{ backgroundColor: '#70d0b596' }}>
        <IonImg
          src={message.image}
          alt={`Project ${message.id + 1}`}
          style={{ height: '200px', marginBottom: '15px' }}
        />
        <IonItem routerLink={`/message/${message.id}`} detail={false} >
          <IonLabel className="ion-text-wrap">
            <h2 style={{paddingRight: '20px', paddingLeft: '20px'}}>
              {message.museumPoint}
              <span className="date">
                <IonNote>{message.timing}</IonNote>
              </span>
            </h2>
            <h3 style={{paddingRight: '20px', paddingLeft: '20px'}}>{message.activities}</h3>
          </IonLabel>
        </IonItem>
        <IonItem>
          <IonLabel>
            <p style={{paddingRight: '20px', paddingLeft: '20px'}}>{message.summary}</p>
          </IonLabel>
        </IonItem>
      </IonCardContent>
    </IonCard>
  );
};

export default MessageListItem;
