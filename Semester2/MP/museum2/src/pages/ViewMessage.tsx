import React, { useState } from 'react';
import {
  IonBackButton,
  IonButtons,
  IonHeader,
  IonIcon,
  IonImg,
  IonItem,
  IonLabel,
  IonNote,
  IonPage,
  IonToolbar,
  IonButton,
  IonModal,
  IonTextarea,
  IonAlert,
  IonTitle,
  IonContent,
  IonList,
  IonCard,
  IonCardContent,
  IonInput, // Added IonInput for text input
  IonSelect, // Added IonSelect for gender
  IonSelectOption, // Added IonSelectOption for gender options
  useIonViewWillEnter,
} from '@ionic/react';
import { personCircle, chatbox } from 'ionicons/icons';
import { useParams } from 'react-router';
import './ViewMessage.scss';

// import { sendFeedback } from '../data/feedback'; // Import your feedback function
import { Message, getMessage } from '../data/messages';

function ViewMessage() {
  const [message, setMessage] = useState<Message>();
  const [showFeedbackModal, setShowFeedbackModal] = useState(false);
  const [feedback, setFeedback] = useState('');
  const [name, setName] = useState('');
  const [gender, setGender] = useState(''); // Added state for gender
  const [age, setAge] = useState(''); // Added state for age
  const [showAlert, setShowAlert] = useState(false);
  const params = useParams<{ id: string }>();

  useIonViewWillEnter(() => {
    const msg = getMessage(parseInt(params.id, 10));
    setMessage(msg);
  });

  const submitFeedback = () => {
    // Your logic to submit feedback goes here
    // Example: sendFeedback({ feedback, name, gender, age });
    setShowAlert(true);
  };

  return (
    <IonPage id="view-message-page">
      <IonHeader translucent>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton text="Back" defaultHref="/home"></IonBackButton>
          </IonButtons>
          <IonButtons slot="end">
            <IonButton onClick={() => setShowFeedbackModal(true)}>
              <IonIcon icon={chatbox} />
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        {message ? (
          <>
            <IonItem>
              <IonLabel className="ion-text-wrap">
                <h2>{message.museumPoint}</h2>
              </IonLabel>
              <IonLabel className="ion-text-wrap">
                <span className="date">
                  <IonNote>{message.timing}</IonNote>
                </span>
              </IonLabel>
            </IonItem>

            <div className="ion-padding">
              <h3>Activites: {message.activities}</h3>
              <IonImg
                src={message.image}
                alt={`Project ${message.id + 1}`}
                style={{ height: '200px', marginBottom: '15px' }}
              />
              <h3>Details: </h3>
              <p>{message.detailDescription}</p>
            </div>
          </>
        ) : (
          <div>Message not found</div>
        )}

        {/* Feedback Form Modal */}
        <IonModal isOpen={showFeedbackModal}>
          <IonHeader>
            <IonToolbar>
              <IonTitle>Feedback Form</IonTitle>
              <IonButtons slot="end">
                <IonButton onClick={() => setShowFeedbackModal(false)}>Close</IonButton>
              </IonButtons>
            </IonToolbar>
          </IonHeader>
          <IonContent>
            <IonList>
              <IonItem>
                <IonLabel position="stacked">Your Name</IonLabel>
                <IonInput
                  type="text"
                  placeholder="Enter your name"
                  value={name}
                  onIonChange={(e) => setName(e.detail.value!)}
                ></IonInput>
              </IonItem>
              <IonItem>
                <IonLabel position="stacked">Gender</IonLabel>
                <IonSelect
                  placeholder="Select gender"
                  value={gender}
                  onIonChange={(e) => setGender(e.detail.value)}
                >
                  <IonSelectOption value="male">Male</IonSelectOption>
                  <IonSelectOption value="female">Female</IonSelectOption>
                  <IonSelectOption value="other">Other</IonSelectOption>
                </IonSelect>
              </IonItem>
              <IonItem>
                <IonLabel position="stacked">Age</IonLabel>
                <IonInput
                  type="number"
                  placeholder="Enter your age"
                  value={age}
                  onIonChange={(e) => setAge(e.detail.value!)}
                ></IonInput>
              </IonItem>
              <IonItem>
                <IonLabel position="stacked">Your Feedback</IonLabel>
                <IonTextarea
                  placeholder="Enter your feedback here"
                  value={feedback}
                  onIonChange={(e) => setFeedback(e.detail.value!)}
                ></IonTextarea>
              </IonItem>
              <IonButton expand="full" onClick={submitFeedback}>
                Submit Feedback
              </IonButton>
            </IonList>
          </IonContent>
        </IonModal>

        {/* Alert for successful submission */}
        <IonAlert
          isOpen={showAlert}
          onDidDismiss={() => setShowAlert(false)}
          header="Success!"
          message="Feedback form has been submitted."
          buttons={['OK']}
          onClick={() => setShowFeedbackModal(false)}
        />
      </IonContent>
    </IonPage>
  );
}

export default ViewMessage;
