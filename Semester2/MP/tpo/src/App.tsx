import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  setupIonicReact
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { briefcaseOutline, informationCircleOutline, personCircleOutline } from 'ionicons/icons';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

import UserDetails from './pages/UserDetails';
import AvailableJobs from './pages/AvailableJobs';
import MandatoryDetails from './pages/MandatoryDetails';
import Login from './pages/Login';
import RegistrationForm from './pages/RegistrationForm';

setupIonicReact();

const App: React.FC = () => {
  const userId = localStorage.getItem('userId');
  return (
    <IonApp>
      <IonReactRouter>
        {
          !userId ? 
            <>
              <Route exact path="/"> <Redirect to="/login" /> </Route>
              <Route path="/login" component={Login} />
              <Route path="/registration" component={RegistrationForm} />
            </>
          :
            <IonTabs>
              <IonRouterOutlet>
                <Route path="/userdetails" component={UserDetails} />
                <Route path="/available-jobs" component={AvailableJobs} />
                <Route path="/mandatory-details" component={MandatoryDetails} />
                <Route exact path="/">
                  <Redirect to="/userdetails" />
                </Route>
              </IonRouterOutlet>
              <IonTabBar slot="bottom">
                <IonTabButton tab="userdetails" href="/userdetails">
                  <IonIcon icon={personCircleOutline} />
                  <IonLabel>User Details</IonLabel>
                </IonTabButton>
                <IonTabButton tab="available-jobs" href="/available-jobs">
                  <IonIcon icon={briefcaseOutline} />
                  <IonLabel>Available Jobs</IonLabel>
                </IonTabButton>
                <IonTabButton tab="mandatory-details" href="/mandatory-details">
                  <IonIcon icon={informationCircleOutline} />
                  <IonLabel>Mandatory Details</IonLabel>
                </IonTabButton>
              </IonTabBar>
            </IonTabs>
        }
      </IonReactRouter>
    </IonApp>
  )
};

export default App;
