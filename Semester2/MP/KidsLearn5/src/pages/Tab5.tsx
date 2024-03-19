import React, { useState } from 'react';
import { IonContent, IonPage, IonButton, IonGrid, IonRow, IonCol, IonLabel, IonRadioGroup, IonRadio, IonCard, IonCardContent, IonAlert } from '@ionic/react';

const Tab5: React.FC = () => {
  const [questionIndex, setQuestionIndex] = useState<number>(0);
  const [questions] = useState<string[]>([
    'Count the number of 😊 emojis in the following: 😊😊😊😄😃',
    'Count the number of 😭 emojis in the following: 😭😢😓😭',
    'Count the number of 😡 emojis in the following: 😡😠😤😠😡',
    'Count the number of ❤️ emojis in the following: ❤️💔💖❤️',
    'Count the number of 😲 emojis in the following: 😲😮😲😯'
  ]);
  const [options] = useState<number[][]>([
    [3, 2, 4],
    [3, 2, 1],
    [4, 3, 2],
    [2, 1, 3],
    [3, 1, 2]
  ]);
  const [correctAnswers] = useState<number[]>([0, 1, 2, 0, 2]); // Index of correct options for each question
  const [selectedOptions, setSelectedOptions] = useState<number[]>([]);
  const [showAlert, setShowAlert] = useState<boolean>(false);
  const [showReviewAlert, setShowReviewAlert] = useState<boolean>(false);
  const [score, setScore] = useState<number>(0);
  const [reviewMessage, setReviewMessage] = useState<string>('');

  const handleOptionChange = (event: CustomEvent) => {
    const selectedOption = parseInt(event.detail.value, 10);
    const updatedSelectedOptions = [...selectedOptions];
    updatedSelectedOptions[questionIndex] = selectedOption;
    setSelectedOptions(updatedSelectedOptions);
  };

  const nextQuestion = () => {
    if (questionIndex < questions.length - 1) {
      setQuestionIndex(prevIndex => prevIndex + 1);
    } else {
      // Calculate score
      const newScore = selectedOptions.reduce((acc, option, index) => {
        if (option === correctAnswers[index]) {
          return acc + 1;
        }
        return acc;
      }, 0);
      setScore(newScore);
      setShowAlert(true);
    }
  };

  const reviewQuestions = () => {
    // Prepare review of answered questions
    const review = questions.map((question, index) => {
      const correctOption = options[index][correctAnswers[index]];
      const userAnswer = options[index][selectedOptions[index]];
      const isCorrect = correctAnswers[index] === selectedOptions[index];
      return { questionIndex: index + 1, question, correctOption, userAnswer, isCorrect };
    });
    return review;
  };

  return (
    <IonPage>
      <IonContent>
        <IonGrid>
          <IonRow>
            <IonCol className="ion-text-center">
              <h1>{questions[questionIndex]}</h1>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <IonRadioGroup value={selectedOptions[questionIndex]} onIonChange={handleOptionChange}>
                {options[questionIndex].map((option, index) => (
                  <IonCard key={index} color={selectedOptions[questionIndex] === index ? 'light' : ''}>
                    <IonCardContent className="ion-text-center">
                      <IonRadio slot="start" value={index} />
                      <IonLabel>{option}</IonLabel>
                    </IonCardContent>
                  </IonCard>
                ))}
              </IonRadioGroup>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol className="ion-text-center">
              <IonButton onClick={nextQuestion}>Next Question</IonButton>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
      <IonAlert
        isOpen={showAlert}
        onDidDismiss={() => setShowAlert(false)}
        header="Quiz Result"
        message={`Your score: ${score}/5`}
        buttons={[
          {
            text: 'Review Questions',
            handler: () => {
              const review = reviewQuestions();
              const reviewMessage = review.map((item, index) => {
                return `Question ${item.questionIndex}: Correct answer - ${item.correctOption}, Your answer - ${item.userAnswer}`;
              }).join('\n');
              setShowAlert(false);
              setShowReviewAlert(true);
              setReviewMessage(reviewMessage);
            }
          }
        ]}
      />
      <IonAlert
        isOpen={showReviewAlert}
        onDidDismiss={() => setShowReviewAlert(false)}
        header="Review Answers"
        message={reviewMessage}
        buttons={['OK']}
      />
    </IonPage>
  );
};

export default Tab5;
