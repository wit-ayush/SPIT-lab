import React, { useState } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton, IonInput, IonItem, IonLabel, IonIcon } from '@ionic/react';
import { mailOutline, lockClosedOutline } from 'ionicons/icons';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import { BASE_URL } from '../constants';

const Login: React.FC = () => {
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const response = await axios.post(`${BASE_URL}login`, { email, password });
      if (response.status === 200) {
        // Store user ID in localStorage
        localStorage.setItem('userId', response.data.userId);
        // Redirect to available jobs page
        history.push('/available-jobs');
      } else {
        // Display error message
        setErrorMessage('Login failed');
      }
    } catch (error) {
      // Display server error message
      setErrorMessage('Server error');
      console.error('Error logging in:', error);
    }
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Login</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        {/* College logo */}
        <div className="college-logo" style={{ display: 'flex', justifyContent: 'center', marginBottom: 60, marginTop: 40 }}>
          <img src="https://www.spit.ac.in/wp-content/themes/spit-main/images/SPIT_logo.png" alt="College Logo" style={{ width: '40%', alignSelf: 'center' }} />
        </div>
        {/* Login form */}
        <form onSubmit={handleSubmit}>
          <IonItem style={{ alignItems: 'center' }}>
            <IonIcon icon={mailOutline} slot="start" />
            <IonLabel position="stacked">Email</IonLabel>
            <IonInput type="email" required value={email} onIonChange={e => setEmail(e.detail.value!)} />
          </IonItem>
          <IonItem style={{ alignItems: 'center' }}>
            <IonIcon icon={lockClosedOutline} slot="start" />
            <IonLabel position="stacked">Password</IonLabel>
            <IonInput type="password" required value={password} onIonChange={e => setPassword(e.detail.value!)} />
          </IonItem>
          {errorMessage && <p style={{ color: 'red', textAlign: 'center' }}>{errorMessage}</p>}
          <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px' }}>
            <IonButton expand="block" type="submit" style={{ width: '48%' }}>Login</IonButton>
            <IonButton routerLink="/registration" style={{ width: '48%' }}>Create Account</IonButton>
          </div>
        </form>
      </IonContent>
    </IonPage>
  );
};

export default Login;
