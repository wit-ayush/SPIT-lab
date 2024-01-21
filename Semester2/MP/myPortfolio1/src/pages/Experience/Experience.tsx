import React from 'react';
import {
  IonButtons,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonContent,
  IonHeader,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar,
} from '@ionic/react';
import { useParams } from 'react-router';
import './Experience.css';

interface ExperienceProps {
  name: string;
}

const Experience: React.FC<ExperienceProps> = ({ name }) => {
  // Static data for testing
  const staticExperiences = [
    {
      companyName: 'OutdoorGoats',
      position: 'Senior Frontend Developer',
      duration: 'Dec 2022 - Aug 2023 · 9 mos',
      location: 'Mumbai, Maharashtra, India · Hybrid',
      description: [
        'Developed the complete e-commerce section.',
        'Created the advertising section.',
        'Suggested many betterment ideas to improve the product.',
      ],
      skills: ['Firebase', 'REST APIs', 'Android', 'GitHub', 'JavaScript', 'React Native', 'Redux'],
    },
    {
      companyName: 'OutdoorGoats',
      position: 'Frontend Developer',
      duration: 'Jun 2022 - Dec 2022 · 7 mos',
      description: [
        'Optimized the heavy components, which improved the user experience.',
        'Worked on media optimization and video size trimming, which helped to reduce cloud expenditures.',
      ],
      skills: ['Firebase', 'REST APIs', 'Android', 'React Native', 'Git', 'Redux'],
    },
    {
      companyName: 'OutdoorGoats',
      position: 'Front-End Developer Intern',
      duration: 'Apr 2022 - Jun 2022 · 3 mos',
      description: [
        'Improved the performance of the home screen.',
        'Did releases on the play store and app store.',
      ],
      skills: ['Firebase', 'REST APIs', 'Android', 'React Native', 'Git', 'Redux'],
    },
    {
      companyName: 'Applore Technologies',
      position: 'React Developer',
      duration: 'Apr 2021 - Dec 2021 · 9 mos',
      location: 'Mumbai, Maharashtra, India · Hybrid',
      description: [
        'Worked on the website and mobile app built on NextJS (themorningcontext.com).',
        'Mastered Redux, web apps (very exciting) on mobile applications.',
        'Worked on the payment gateway (Stripe).',
      ],
      skills: ['Next js', 'Jest', 'REST APIs', 'Android', 'Linux', 'React Native', 'React.js', 'Git', 'Redux'],
    },
    {
      companyName: 'ThinkMerit',
      position: 'React Native Developer',
      duration: 'Jan 2021 - Apr 2021 · 4 mos',
      location: 'Mumbai, Maharashtra, India · Remote',
      description: [
        'This was my first internship, and here I have learned to build apps.',
        'Created an exam portal app where students can upload their answer sheets, track their marks, and many other functionalities.',
      ],
      skills: ['REST APIs', 'Android', 'React Native', 'Git'],
    },
    // Add more experiences as needed
  ];

  // Group experiences by company name
  const groupedExperiences = staticExperiences.reduce((acc, experience) => {
    const key = experience.companyName.toLowerCase();
    if (!acc[key]) {
      acc[key] = [experience];
    } else {
      acc[key].push(experience);
    }
    return acc;
  }, {} as Record<string, typeof staticExperiences>);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>{name}</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">{name}</IonTitle>
          </IonToolbar>
        </IonHeader>

        <div className="custom-experience-list">
          {Object.keys(groupedExperiences).map((companyName) => (
            <IonCard key={companyName} style={{ fontFamily: 'Arial, sans-serif' }}>
              <IonCardHeader>
                <IonCardSubtitle style={{ fontSize: '1.2rem', fontWeight: 'bold', color: '#ffffff' }}>
                  {companyName}
                </IonCardSubtitle>
              </IonCardHeader>
              {groupedExperiences[companyName].map((experience, index) => (
                <IonCardContent key={index} style={{ fontFamily: 'Arial, sans-serif' }}>
                  <IonCardHeader>
                    <IonCardSubtitle style={{ fontWeight: 'bold', color: '#ffffff' }}>{experience.position}</IonCardSubtitle>
                    <IonCardTitle style={{ color: '#ffffff' }}>{experience.duration}</IonCardTitle>
                    {experience.location && (
                      <IonCardSubtitle style={{ color: '#ffffff' }}>{experience.location}</IonCardSubtitle>
                    )}
                  </IonCardHeader>
                  <ul>
                    {experience.description.map((item, idx) => (
                      <li key={idx} style={{ color: '#ffffff' }}>{item}</li>
                    ))}
                  </ul>
                  <div style={{ color: '#ffffff', fontWeight: 'bold', marginTop: '10px', marginLeft: '20px', textAlign: 'left' }}>
                    Skills: {experience.skills.join(' · ')}
                  </div>
                </IonCardContent>
              ))}
            </IonCard>
          ))}
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Experience;
