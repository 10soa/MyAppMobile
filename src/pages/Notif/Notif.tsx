import { IonItemOptions,IonItemOption,IonItemSliding,IonContent,IonRippleEffect,IonInput,IonTabs,IonTabButton,IonHeader, IonPage, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonItem, IonIcon, IonLabel, IonButton, IonTabBar, IonRouterLink  } from '@ionic/react';
import { IonFooter,IonList,IonFab, IonFabButton, IonFabList } from '@ionic/react';
import { add, settings, share, person, arrowForwardCircle, arrowBackCircle, arrowUpCircle, logoVimeo, logoFacebook, logoInstagram, logoTwitter } from 'ionicons/icons';
import './Notif.css';
import { pin,triangle, wifi, wine, warning, walk } from 'ionicons/icons';
import inscription from '../Inscription/inscription';


const num=[1,2,3,4,5];
const lis=num.map((n)=>
    <IonItemSliding>
    <IonItem>
    <IonLabel>Item</IonLabel>
    </IonItem>
   
    </IonItemSliding>
  );

export const Notif: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
      <IonToolbar>
          <IonTitle><h1 className='title'>Notifications </h1>
          <IonIcon icon="notifications-outline"/></IonTitle>
      </IonToolbar>
      </IonHeader>
      <IonContent>
      <IonList typeof='full'>
      {lis}
      </IonList>

      
        
        
      </IonContent>
      <IonTabBar slot="top">
          <IonTabButton>
            <IonIcon icon={wifi} />
          </IonTabButton>
      </IonTabBar>
        
    </IonPage>
  );
};

export default Notif;
