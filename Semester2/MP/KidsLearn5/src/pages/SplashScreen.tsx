import React, { useEffect } from 'react';
import { IonPage, IonContent } from '@ionic/react';
import './SplashScreen.css'; // Import CSS file for custom styling

const SplashScreen: React.FC = () => {
  useEffect(() => {
    // Simulate loading time
    setTimeout(() => {
      window.location.replace('/tab2'); // Assuming '/main' is your main page route
    }, 3000);
  }, []);

  return (
    <IonPage>
      <IonContent className="splash-content">
        {/* Your splash screen content */}
        <div className="splash">
          <img src="https://images01.nicepagecdn.com/page/18/33/website-template-preview-183359.jpg" alt="App Logo" className="logo" /> {/* Add your logo image here */}
          <h1>Welcome to Kids Learning App</h1>
          <p>Loading...</p>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default SplashScreen;
