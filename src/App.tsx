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
import { ellipse, square, triangle } from 'ionicons/icons';
import Tab4 from './pages/Login/login';
import Tab5 from './pages/Inscription/inscription';
import Tab6 from './pages/Acceuil/acceuil';
import Tab7 from './pages/Notif/Notif';
import Tab8 from './pages/Fiche/fiche';
import Tab9 from './pages/Test/Test';
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

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
     
        
        <IonRouterOutlet>
          <Route path="/login">
            <Tab4 />
          </Route>
          <Route path="/test">
            <Tab9 />
          </Route>
         
          <Route path="/notif">
            <Tab7 />
          </Route>
          <Route path="/fiche">
            <Tab8 />
          </Route>
          <Route path="/inscription">
            <Tab5 />
          </Route>
          <Route path="/acceuil">
            <Tab6 />
          </Route>
          <Route exact path="/">
            <Redirect to="/login"/>
          </Route>
        </IonRouterOutlet>
       
      
    </IonReactRouter>
  </IonApp>
);

export default App;
