import { IonContent,IonRippleEffect,IonInput,IonTabs,IonTabButton,IonHeader, IonPage, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonItem, IonIcon, IonLabel, IonButton, IonTabBar, IonRouterLink  } from '@ionic/react';
import { IonFooter,IonFab, IonFabButton, IonFabList } from '@ionic/react';
import { add, settings, share, person, arrowForwardCircle, arrowBackCircle, arrowUpCircle, logoVimeo, logoFacebook, logoInstagram, logoTwitter } from 'ionicons/icons';
import './acceuil.css';
import { pin,triangle, wifi, wine, warning, walk } from 'ionicons/icons';
import inscription from '../Inscription/inscription';


const num=[1,2,3,4,5];
const lis=num.map((n)=>
  <IonCard className="acCard">
  <IonCardHeader>
    <img  className='s' src="assets/icon/s.png"></img>
  </IonCardHeader>
    <IonCardContent className='s1'>
      <h4>Type de Signalement</h4>
      <p >Date</p>
      <IonRouterLink  href="#">plus de details</IonRouterLink>
    </IonCardContent>
  </IonCard>
  );

export const acceuil: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
      <IonToolbar>
          <IonTitle><h1>Accueil </h1>
          <IonIcon icon="notifications-outline"/></IonTitle>
      </IonToolbar>
      </IonHeader>
      <IonContent>
      
      
        {lis}
        
      </IonContent>
      <IonTabBar slot="top">
          <IonTabButton>
            <IonIcon icon={wifi} />
          </IonTabButton>
      </IonTabBar>
        
    </IonPage>
  );
};

export default acceuil;
