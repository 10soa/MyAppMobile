import { IonContent,IonRippleEffect,IonInput,IonTabs,IonTabButton,IonHeader, IonPage, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonItem, IonIcon, IonLabel, IonButton, IonTabBar, IonRouterLink  } from '@ionic/react';
import { IonFooter,IonFab, IonFabButton, IonFabList } from '@ionic/react';
import { add, settings, share, person, arrowForwardCircle, arrowBackCircle, arrowUpCircle, logoVimeo, logoFacebook, logoInstagram, logoTwitter } from 'ionicons/icons';
import './acceuil.css';
import { pin,triangle, wifi, wine, warning, walk,notificationsOutline,addCircleOutline} from 'ionicons/icons';
import inscription from '../Inscription/inscription';


const num=[1,2,3,4,5];
const lis=num.map((n)=>
  <IonCard className="acCard">
  <IonCardHeader>
    <img  className='s' src="assets/icon/s.png"></img>
  </IonCardHeader>
    <IonCardContent className='s1'>
      <h4 className='s2'>Type de Signalement</h4>
     <p>12/12/2021</p>
      <IonRouterLink  href="#">plus de details</IonRouterLink>

    </IonCardContent>
  </IonCard>
  );

export const acceuil: React.FC = () => {
  return (
    <IonPage>
      
      <IonHeader>
      <IonToolbar>
          <IonTitle><h1 className='title'>Accueil <IonIcon className='not' icon={notificationsOutline} /></h1 >

           </IonTitle>
      </IonToolbar>
      </IonHeader>
      <IonContent>
        
      
        {lis}
        <IonFab vertical="bottom" horizontal="start" slot="fixed">
         <IonRouterLink href="#"><IonFabButton>
            <IonIcon icon={add}/>
          </IonFabButton> </IonRouterLink> 
  </IonFab>
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
