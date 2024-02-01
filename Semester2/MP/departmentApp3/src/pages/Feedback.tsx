// src/pages/Feedback.tsx

import React, { useState } from 'react';
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonInput,
  IonLabel,
  IonItem,
  IonTextarea,
  IonButton,
  IonAlert,
  IonIcon,
  IonRow,
  IonCol,
} from '@ionic/react';
import { star } from 'ionicons/icons';
import './Feedback.css';

const Feedback: React.FC = () => {
  const [name, setName] = useState('');
  const [ucId, setUcId] = useState('');
  const [email, setEmail] = useState('');
  const [ratings, setRatings] = useState<number | undefined>(undefined);
  const [suggestions, setSuggestions] = useState('');
  const [showThankYouAlert, setShowThankYouAlert] = useState(false);

  const submitFeedback = () => {
    // Add logic to submit feedback (e.g., to a backend service)
    
    setShowThankYouAlert(true);
  };

  const clearForm = () => {
    setName('');
    setUcId('');
    setEmail('');
    setRatings(undefined);
    setSuggestions('');
  };

  const updateRating = (selectedRating: number) => {
    setRatings(selectedRating);
  };

  const renderStars = () => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      const color = i <= (ratings || 0) ? 'skyblue' : 'grey';
      stars.push(
        <IonIcon
          key={i}
          icon={star}
          style={{ color, cursor: 'pointer' }}
          onClick={() => updateRating(i)}
        />
      );
    }
    return stars;
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Feedback</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen className="ion-padding">
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Feedback</IonTitle>
          </IonToolbar>
        </IonHeader>

        {/* Feedback Form */}
        <IonItem>
          <IonLabel position="stacked">Name</IonLabel>
          <IonInput value={name} onIonChange={(e) => setName(e.detail.value!)}></IonInput>
        </IonItem>

        <IonItem>
          <IonLabel position="stacked">UC ID</IonLabel>
          <IonInput value={ucId} onIonChange={(e) => setUcId(e.detail.value!)}></IonInput>
        </IonItem>

        <IonItem>
          <IonLabel position="stacked">Email</IonLabel>
          <IonInput value={email} onIonChange={(e) => setEmail(e.detail.value!)}></IonInput>
        </IonItem>

        <IonItem>
          <IonLabel position="stacked">Ratings</IonLabel>
          <IonRow className="stars-row">
            <IonCol>{renderStars()}</IonCol>
          </IonRow>
        </IonItem>

        <IonItem>
          <IonLabel position="stacked">Suggestions</IonLabel>
          <IonTextarea
            value={suggestions}
            onIonChange={(e) => setSuggestions(e.detail.value!)}
          ></IonTextarea>
        </IonItem>

        <IonButton expand="full" onClick={submitFeedback}>
          Submit Feedback
        </IonButton>

        {/* Thank You Alert */}
        <IonAlert
          isOpen={showThankYouAlert}
          onDidDismiss={() => {
            setShowThankYouAlert(false);
            clearForm();
          }}
          header="Thank You!"
          message={`Thank you, ${name}! Your feedback has been received.`}
          buttons={['OK']}
        />
      </IonContent>
    </IonPage>
  );
};

export default Feedback;
