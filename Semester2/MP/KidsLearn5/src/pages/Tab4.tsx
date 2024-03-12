import React, { useState } from 'react';
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonList,
  IonItem,
  IonLabel,
  IonInput,
  IonButton,
  IonIcon,
  IonBadge,
  IonToast
} from '@ionic/react';
import { personCircleOutline, logOutOutline } from 'ionicons/icons';

const Profile: React.FC = () => {
  const [name, setName] = useState('Ayush Tripathi');
  const [email, setEmail] = useState('ayush.tripathi23@spit.ac.in');
  const [password, setPassword] = useState('');
  const [level, setLevel] = useState(5);
  const [rating, setRating] = useState(4.5);
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');

  const isValidEmail = (value: string) => {
    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(value);
  };

  const handleUpdateProfile = () => {
    if (!name.trim()) {
      setToastMessage('Please enter your name');
      setShowToast(true);
      return;
    }
    if (!isValidEmail(email)) {
      setToastMessage('Please enter a valid email address');
      setShowToast(true);
      return;
    }
    if (!password.trim()) {
      setToastMessage('Please enter your password');
      setShowToast(true);
      return;
    }

    // Perform update logic here
    console.log('Updated Profile:', { name, email, password });

    // Reset form fields after update
    setName('');
    setEmail('');
    setPassword('');

    // Show success message
    setToastMessage('Profile updated successfully');
    setShowToast(true);
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="medium">
          <IonTitle>Profile</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding" style={{ backgroundColor: '#ffffcc' }}>
        <div style={{ textAlign: 'center' }}>
          <img src="https://t3.ftcdn.net/jpg/00/17/30/74/360_F_17307408_RcdYtwlTOMmQAqqqYLZkJBDgb1SKHOXZ.jpg" alt="Profile" style={{ width: '100px', height: '100px', borderRadius: '50%', objectFit: 'contain' }} />
          <h2>{name}</h2>
          <h4>{email}</h4>
          <IonBadge color="success">Level {level}</IonBadge>
          <IonBadge color="primary" style={{ marginLeft: '0.5rem' }}>Rating: {rating}</IonBadge>
        </div>
        <IonList>
          <IonItem>
            <IonLabel position="floating">Name</IonLabel>
            <IonInput type="text" value={name} onIonChange={(e) => setName(e.detail.value!)}></IonInput>
          </IonItem>
          <IonItem>
            <IonLabel position="floating">Email</IonLabel>
            <IonInput type="email" value={email} onIonChange={(e) => setEmail(e.detail.value!)}></IonInput>
          </IonItem>
          <IonItem>
            <IonLabel position="floating">Password</IonLabel>
            <IonInput type="password" value={password} onIonChange={(e) => setPassword(e.detail.value!)}></IonInput>
          </IonItem>
          <IonButton expand="full" color="primary" style={{ marginTop: '1rem' }} onClick={handleUpdateProfile}>
            Update Profile
          </IonButton>
          <IonButton expand="full" color="danger" style={{ marginTop: '1rem' }}>
            <IonIcon icon={logOutOutline} slot="start" />
            Logout
          </IonButton>
          <div style={{ marginTop: '1rem', display: 'flex', justifyContent: 'center' }}>
            <IonBadge color="warning">Math Master</IonBadge>
            <IonBadge color="warning" style={{ marginLeft: '0.5rem' }}>Alphabet Ace</IonBadge>
          </div>
        </IonList>
        <IonToast
          isOpen={showToast}
          onDidDismiss={() => setShowToast(false)}
          message={toastMessage}
          duration={3000}
        />
      </IonContent>
    </IonPage>
  );
};

export default Profile;
