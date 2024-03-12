import { IonContent, IonList, IonItem, IonAvatar, IonLabel, IonBadge, IonPage, IonHeader, IonToolbar, IonTitle } from '@ionic/react';


const Tab3: React.FC = () => {

  const leaderboardData = [
    { name: 'Ayush', level: 5, score: 200 },
    { name: 'Jane', level: 4, score: 180 },
    { name: 'Doe', level: 3, score: 160 },
    { name: 'Alice', level: 3, score: 150 },
    { name: 'Bob', level: 2, score: 120 },
  ];
  
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="medium">
          <IonTitle>Leader Board</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding" style={{ backgroundColor: '#f2f2f2' }}>
      <IonList>
        {leaderboardData.map((user, index) => (
          <IonItem key={index}>
            <IonAvatar slot="start">
              <img src={`https://picsum.photos/200/300?id=${index}`} alt="User Avatar" />
            </IonAvatar>
            <IonLabel>
              <h2>{user.name}</h2>
              <p>Level {user.level}</p>
            </IonLabel>
            <IonBadge color="warning">{user.score}</IonBadge>
          </IonItem>
        ))}
      </IonList>
    </IonContent>
    </IonPage>
  );
};

export default Tab3;
