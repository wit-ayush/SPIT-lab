// src/pages/Faculty.tsx

import React from 'react';
import {
  IonContent,
  IonPage,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonList,
  IonItem,
  IonLabel,
  IonToggle,
  IonImg,
  IonIcon,
  IonButton,
  IonToolbar,
  IonHeader,
  IonTitle,
} from '@ionic/react';
import { chevronDown, chevronUp } from 'ionicons/icons';

const facultyData = [
  {
    name: 'Albert Einstein',
    designation: 'Professor',
    linkedin: 'https://www.linkedin.com/in/johndoe/',
    image: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSMj2zEQAZpoqJQe9LmFF6mOew2OgwPSpHOQMyYizMuD8JtrTyO',
    email: 'Albert@example.com',
    areaOfInterest: 'Computer Science, Artificial Intelligence',
  },
  {
    name: 'Albert Einstein 2',
    designation: 'HOD',
    linkedin: 'https://www.linkedin.com/in/johndoe/',
    image: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSMj2zEQAZpoqJQe9LmFF6mOew2OgwPSpHOQMyYizMuD8JtrTyO',
    email: 'Einstein@example.com',
    areaOfInterest: 'Computer Science, Artificial Intelligence',
  },
  // Add more faculty members as needed
];

const Faculty: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Faculty</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList>
          {facultyData.map((faculty, index) => (
            <FacultyCard key={index} faculty={faculty} />
          ))}
        </IonList>
      </IonContent>
    </IonPage>
  );
};

interface FacultyCardProps {
  faculty: {
    name: string;
    designation: string;
    linkedin: string;
    image: string;
    email: string;
    areaOfInterest: string;
  };
}

const FacultyCard: React.FC<FacultyCardProps> = ({ faculty }) => {
  const [expanded, setExpanded] = React.useState(false);

  return (
    <IonCard>
      <IonCardHeader style={{backgroundColor:'#00aaffab', flexDirection: 'row', flex:1, alignItems: 'center'}}>
        <IonCardTitle>{expanded ? faculty.name : faculty.designation}</IonCardTitle>
        <IonButton style={{color: 'red'}} fill="clear" onClick={() => setExpanded(!expanded)}>
          <IonIcon icon={expanded ? chevronUp : chevronDown} />
        </IonButton>
      </IonCardHeader>
      {expanded ? (
        <IonCardContent style={{margin: 20}}>
          <IonImg src={faculty.image} alt={`Image of ${faculty.name}`} />
          <IonItem>
            <IonLabel>
              <h2>{faculty.designation}</h2>
              <p>Email: {faculty.email}</p>
              <p>Area of Interest: {faculty.areaOfInterest}</p>
              <p>
                LinkedIn: <a href={faculty.linkedin}>{faculty.linkedin}</a>
              </p>
            </IonLabel>
          </IonItem>
        </IonCardContent>
      ) : null}
    </IonCard>
  );
};

export default Faculty;
