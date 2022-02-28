import { IonContent,IonRippleEffect,IonInput,IonTabs,IonTabButton,IonHeader, IonPage, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonItem, IonIcon, IonLabel, IonButton, IonTabBar, IonRouterLink  } from '@ionic/react';
import { IonFooter,IonFab, IonFabButton, IonFabList } from '@ionic/react';
import { add,logOutSharp, settings, share, person, arrowForwardCircle, arrowBackCircle, arrowUpCircle, logoVimeo, logoFacebook, logoInstagram, logoTwitter } from 'ionicons/icons';
import { arrowBackSharp,homeSharp,pin,triangle, wifi, wine, warning, walk,notificationsSharp,addCircleOutline} from 'ionicons/icons';
import inscription from '../Inscription/inscription';
import axios from 'axios';
import React,{ Component ,useEffect,useState} from 'react';

const url="http://192.168.88.27:2004/signalementUtilisateurEnCours/test/1";
class Test extends Component {
   
    render() {
        return (
            <IonPage>
      
            <IonHeader>
            <IonToolbar>
                <IonTitle><h1 className='title'>Accueil <IonIcon className='not' icon={notificationsSharp} /></h1 >
      
                 </IonTitle>
            </IonToolbar>
            </IonHeader>
            <IonContent>
              
        
              
              <IonFab vertical="top" horizontal="start" slot="fixed">
               <IonRouterLink href="#"><IonFabButton>
                  <IonIcon icon={add}/>
                </IonFabButton> </IonRouterLink> 
            </IonFab>
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
    }
}
export default Test;
