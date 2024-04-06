import React, { useState } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButtons, IonBackButton, IonInput, IonItem, IonLabel, IonButton, IonText } from '@ionic/react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import { BASE_URL } from "../constants";

const RegistrationForm: React.FC = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordsMatch, setPasswordsMatch] = useState(true);
  const [registrationError, setRegistrationError] = useState('');
  const history = useHistory();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (password === confirmPassword) {
      try {
        setPasswordsMatch(true);
        // Make API call to register user
        const response = await axios.post(`${BASE_URL}register`, {
          fullName,
          email,
          password 
        });
        // Check response status
        if (response.status === 201) {
          // Registration successful, navigate to the next form page
          history.push('/mandatory-details');
        } else {
          // Registration failed, display error message
          setRegistrationError('Registration failed');
        }
      } catch (error) {
        console.error('Error registering user:', error);
        // Display error message
        setRegistrationError('Server error');
      }
    } else {
      setPasswordsMatch(false);
    }
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/login" text="Login" />
          </IonButtons>
          <IonTitle>Registration Form</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <form onSubmit={handleSubmit}>
          <IonItem>
            <IonLabel position="stacked">Full Name</IonLabel>
            <IonInput type="text" required value={fullName} onIonChange={e => setFullName(e.detail.value!)} />
          </IonItem>
          <IonItem>
            <IonLabel position="stacked">Email</IonLabel>
            <IonInput type="email" required value={email} onIonChange={e => setEmail(e.detail.value!)} />
          </IonItem>
          <IonItem>
            <IonLabel position="stacked">Password</IonLabel>
            <IonInput type="password" required value={password} onIonChange={e => setPassword(e.detail.value!)} />
          </IonItem>
          <IonItem>
            <IonLabel position="stacked">Confirm Password</IonLabel>
            <IonInput type="password" required value={confirmPassword} onIonChange={e => setConfirmPassword(e.detail.value!)} />
          </IonItem>
          {!passwordsMatch && (
            <IonText color="danger" style={{ marginLeft: '10px' }}>
              Passwords do not match
            </IonText>
          )}
          {registrationError && (
            <IonText color="danger" style={{ marginLeft: '10px' }}>
              {registrationError}
            </IonText>
          )}
          <IonButton type="submit" expand="block">Register</IonButton>
        </form>
      </IonContent>
    </IonPage>
  );
};

export default RegistrationForm;
