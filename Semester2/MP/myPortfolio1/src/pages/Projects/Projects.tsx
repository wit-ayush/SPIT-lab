import React from 'react';
import {
  IonButtons,
  IonContent,
  IonHeader,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar,
  IonCard,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonImg,
} from '@ionic/react';
import './Projects.css';

const Projects: React.FC = () => {

  const projects = [
    {
      title: 'Quant Finance Model',
      description: 'Built a quantitative finance model for financial analysis.',
      image: 'https://img.freepik.com/premium-photo/future-financial-technology-controlled-by-ai-robot-using-machine-learning_31965-10328.jpg?size=626&ext=jpg',
    },
    {
      title: 'E-commerce X Social Networking',
      description: 'Created a social networking app with advanced features inside which I have designed and implemented a comprehensive e-commerce platform.',
      image: 'https://play-lh.googleusercontent.com/-z6IYXLy21oZIvwDibRgrR-x9NFyWR7m2ImtjknlvTjiBEyOf8xaCBETw99NQWbcfA=w240-h480-rw',
    },
    {
      title: 'Newsletter website',
      description: 'Worked on the Newsletter website known as morning context, funded by famous entrepreneurs like Kunal Shah, etc.',
      image: 'https://assets.themorningcontext.com/icons/text_in_circle.png',
    },
    {
      title: 'Exam portal',
      description: 'My first-ever real-life project, I have built an exam portal app for JEE/NEET aspirants.',
      image: 'https://play-lh.googleusercontent.com/V9TVlJFt4URiiWxNuLHmJMa2a4EbB9Efg52FftX1NhzuLgHb61MRrNWG4Up92CiKTK_u=w240-h480-rw',
    },
    {
      title: 'Guardian Angel App',
      description: 'Developed a Guardian Angel app for safety and emergency situations. and to guide teenagers to the right path.',
      image: 'https://t4.ftcdn.net/jpg/05/72/49/63/360_F_572496384_wvIQbYqAIcbPVnk7O7Ysx94zcT0YS2Ij.jpg',
    },
  ];

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Jack of all trades, master of none</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">{name}</IonTitle>
          </IonToolbar>
        </IonHeader>

        <div className="projects-container">
          {projects.map((project, index) => (
            <IonCard key={index} style={{ display: 'flex', margin: '24px' }}>
              <IonImg
                src={project.image}
                alt={`Project ${index + 1}`}
                style={{ width: 'auto', height: '200px' }}
              />
              <IonCardHeader style={{ width: '70%', padding: '16px' }}>
                <IonCardSubtitle>{project.title}</IonCardSubtitle>
                <IonCardTitle>{project.description}</IonCardTitle>
              </IonCardHeader>
            </IonCard>
          ))}
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Projects;
