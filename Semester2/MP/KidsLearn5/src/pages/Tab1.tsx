import React, { useRef, useState } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonGrid, IonRow, IonCol, IonButton } from '@ionic/react';
import { RouteComponentProps, useParams } from 'react-router-dom';
import './Tab1.css';

const Tab1: React.FC<RouteComponentProps> = ({ match }) => {
  const videoRef = useRef<HTMLIFrameElement>(null);
  const { lesson } = useParams<{ lesson: string }>();

  const [alphabetIndex, setAlphabetIndex] = useState<number>(0);
  const [letters] = useState<string[]>(['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J']);
  const [images] = useState<string[]>([
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvXo7XFMCndSb5WM2X34nHYh7YrnRstMIq8gL1_jggHo8cg_B37Mgpukjy7MaDm39PWe4&usqp=CAU',
    'https://png.pngtree.com/png-vector/20230318/ourmid/pngtree-cute-yellow-bee-cartoon-illustration-png-image_6653635.png',
    'https://cdn.pixabay.com/photo/2016/09/15/19/24/sunflower-1670213_960_720.png',
    'https://cdn.pixabay.com/photo/2013/07/12/17/47/coffee-153066_960_720.png',
    'https://cdn.pixabay.com/photo/2016/03/31/19/58/lemonade-1292977_960_720.png',
    'https://cdn.pixabay.com/photo/2017/08/30/01/05/milky-way-2695569_960_720.jpg',
    'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg',
    'https://cdn.pixabay.com/photo/2016/01/31/20/11/sunflower-1170210_960_720.jpg',
    'https://cdn.pixabay.com/photo/2014/12/18/21/19/rose-571185_960_720.jpg',
    'https://cdn.pixabay.com/photo/2017/07/08/09/26/beach-2486637_960_720.jpg',
  ]);

  const handleNextAlphabet = () => {
    setAlphabetIndex((prevIndex) => (prevIndex < letters.length - 1 ? prevIndex + 1 : 0));
  };

  const handlePrevAlphabet = () => {
    setAlphabetIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : letters.length - 1));
  };


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


  // Render different content based on the lesson type
  const renderContent = () => {
    if (lesson === 'Numbers') {
      return (
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
          <IonRow>
            <IonCol size="12" className="ion-text-center">
              <IonButton onClick={shuffleNumbers}>Shuffle Numbers</IonButton>
            </IonCol>
          </IonRow>
        </IonGrid>
      );
    } else if (lesson === 'Alphabets') {
      return (
        <IonGrid>
          <IonRow>
            <IonCol size="12" className="ion-text-center">
              <IonButton onClick={handlePrevAlphabet}>Previous</IonButton>
              <span>{letters[alphabetIndex]}</span>
              <IonButton onClick={handleNextAlphabet}>Next</IonButton>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol size="12" className="ion-text-center">
              <img src={images[alphabetIndex]} alt={`Image for ${letters[alphabetIndex]}`} style={{ maxWidth: '200px', maxHeight: '200px' }} />
            </IonCol>
          </IonRow>
        </IonGrid>
      );
    } else {
      return <div>No content available for this lesson</div>;
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
                src={"https://www.youtube.com/embed/x6D51-pz2A4"}
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
        {renderContent()}
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
