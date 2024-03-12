import React, { useRef, useState } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonGrid, IonRow, IonCol, IonButton } from '@ionic/react';
import './Tab1.css';

const Tab1: React.FC = () => {
  const videoRef = useRef<HTMLIFrameElement>(null);

  const handlePlayVideo = () => {
    if (videoRef.current) {
      videoRef.current.src = "https://www.youtube.com/embed/x6D51-pz2A4?autoplay=1";
    }
  };

  const [numbers, setNumbers] = useState<number[]>([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

  const shuffleNumbers = () => {
    const shuffledNumbers = [...numbers].sort(() => Math.random() - 0.5);
    setNumbers(shuffledNumbers);
  };

  const handleNumberClick = (number: number) => {
    const currentIndex = numbers.indexOf(number);
    const emptyIndex = numbers.indexOf(10);
    if (currentIndex !== -1 && emptyIndex !== -1) {
      const newNumbers = [...numbers];
      newNumbers[emptyIndex] = number;
      newNumbers[currentIndex] = 10;
      setNumbers(newNumbers);
    }
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="medium">
          <IonTitle>Practice Room</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonGrid>
          <IonRow>
            <IonCol size="12">
              <iframe
                ref={videoRef}
                width="100%"
                height="315"
                src="https://www.youtube.com/embed/x6D51-pz2A4"
                frameBorder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol size="12" className="ion-text-center">
              <IonButton onClick={handlePlayVideo}>Play Video</IonButton>
            </IonCol>
          </IonRow>
        </IonGrid>
        <IonGrid>
          {[0, 1, 2, 3].map((row) => (
            <IonRow key={row}>
              {[0, 1, 2, 3].map((col) => {
                const number = numbers[row * 4 + col];
                return (
                  <IonCol key={col} size="3">
                    <IonButton expand="full" onClick={() => handleNumberClick(number)}>
                      {number !== 10 ? number : ''}
                    </IonButton>
                  </IonCol>
                );
              })}
            </IonRow>
          ))}
        </IonGrid>
        <IonRow>
          <IonCol size="12" className="ion-text-center">
            <IonButton onClick={shuffleNumbers}>Shuffle Numbers</IonButton>
          </IonCol>
        </IonRow>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
