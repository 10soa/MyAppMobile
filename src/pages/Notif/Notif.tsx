import { IonItemOptions,IonItemOption,IonItemSliding,IonContent,IonRippleEffect,IonInput,IonTabs,IonTabButton,IonHeader, IonPage, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonItem, IonIcon, IonLabel, IonButton, IonTabBar, IonRouterLink  } from '@ionic/react';
import { IonFooter,IonList,IonFab, IonFabButton, IonFabList } from '@ionic/react';
import { add, settings, share, person, arrowForwardCircle, arrowBackCircle, arrowUpCircle, logoVimeo, logoFacebook, logoInstagram, logoTwitter } from 'ionicons/icons';
import './Notif.css';
import { closeCircleSharp,pin,triangle,logOutSharp,homeSharp,arrowBackSharp, wifi, wine, warning, walk } from 'ionicons/icons';
import inscription from '../Inscription/inscription';


const num=[1,2,3,4,5];
const lis=num.map((n)=>
    <IonItemSliding>
    <IonItem className='notif'>
    <img  className='sn' src="assets/icon/s.png"></img>
    <IonLabel className='sn1'>Signalement  <IonIcon className='x' color="success" icon={closeCircleSharp}/>
    <p className='wrap'>-------------</p>
    <p className='date'> Terminé le : 2021-12-12</p>  </IonLabel>
    </IonItem>
    
     
    </IonItemSliding>
  );

export const Notif: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
      <IonToolbar>
          <IonTitle> <IonIcon className='retour' icon={arrowBackSharp}/></IonTitle><h1 className='title1'>Notifications </h1>
         
      </IonToolbar>
      </IonHeader>
      <IonContent>
      <IonList typeof='full'>
      {lis}
      </IonList>

      
        
        
      </IonContent>

      <IonTabBar slot="top">
      <IonTabButton>
            <IonIcon icon={logOutSharp} />
          </IonTabButton>
          <IonTabButton>
            <IonIcon icon={homeSharp} /> Accueil
          </IonTabButton>
          <IonTabButton>
            <IonIcon icon={logOutSharp} /> Se deconnecter
          </IonTabButton>
      </IonTabBar>
        
    </IonPage>
  );
};

export default Notif;
