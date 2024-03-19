import React, { useState } from 'react';
import { IonContent, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonList, IonItem, IonLabel, IonPage, IonHeader, IonToolbar, IonTitle } from '@ionic/react';
import { useHistory } from 'react-router';

const Tab2: React.FC = () => {
  // Sample subjects and lessons data
  const subjects = [
    { id: 1, name: 'Mathematics', lessons: ['Numbers', 'Tables', 'Calculus'] },
    { id: 3, name: 'Language Arts', lessons: ['Alphabets', 'Stories'] },
  ];

  const history = useHistory();
  const [selectedSubject, setSelectedSubject] = useState<string | undefined>(undefined);

  const handleLessonClick = (lesson: string, youtubeLink: string) => {
    const encodedYoutubeLink = encodeURIComponent(youtubeLink);
    const url = `/tab1/${lesson}/${encodedYoutubeLink}`;
    history.push(url);
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="medium">
          <IonTitle>Lessons</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        {subjects.map(subject => (
          <IonCard key={subject.id} onClick={() => setSelectedSubject(subject.name)} style={{ cursor: 'pointer' }}>
            <IonCardHeader>
              <IonCardTitle>{subject.name}</IonCardTitle>
            </IonCardHeader>
            {selectedSubject === subject.name && (
              <IonCardContent>
                <IonList>
                  {subject.lessons.map(lesson => (
                    <IonItem onClick={() => handleLessonClick(lesson, "https://www.youtube.com/embed/x6D51-pz2A4?autoplay=1")} key={lesson}>
                      <IonLabel>{lesson}</IonLabel>
                    </IonItem>
                  ))}
                </IonList>
              </IonCardContent>
            )}
          </IonCard>
        ))}
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
