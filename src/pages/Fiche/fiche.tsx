import { IonContent,IonRippleEffect,IonInput,IonTabs,IonTabButton,IonHeader, IonPage, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonItem, IonIcon, IonLabel, IonButton, IonTabBar, IonRouterLink, IonSlides, IonSlide  } from '@ionic/react';
import { IonFooter,IonImg,IonVirtualScroll, IonFabButton, IonFabList } from '@ionic/react';
import { add, settings, share, person, arrowForwardCircle, arrowBackCircle, arrowUpCircle, logoVimeo, logoFacebook, logoInstagram, logoTwitter } from 'ionicons/icons';
import './fiche.css';
import { pin,triangle, wifi, wine, warning, walk } from 'ionicons/icons';
import inscription from '../Inscription/inscription';

export const fiche: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
      <IonToolbar>
          <IonTitle><h1>Fiche </h1>
          <IonIcon icon="notifications-outline"/></IonTitle>
      </IonToolbar>
      </IonHeader>
      <IonContent>

        <IonCard className="acCard">
            
                <IonCardContent className='s1'>
                    <IonSlides>
                        <IonSlide>
                        <img  className='ss' src="assets/icon/s.png"></img>
                        </IonSlide>
                        <IonSlide>
                        <img  className='ss' src="assets/icon/s.png"></img>
                        </IonSlide>
                        <IonSlide>
                        <img  className='ss' src="assets/icon/s.png"></img>
                        </IonSlide>
                    </IonSlides>
                </IonCardContent>
        </IonCard>

        <IonCard className="accCard">
            <IonCardHeader>
               
            </IonCardHeader>
                <IonCardContent className='s11'>
                <h3 className="h33" >Region</h3>
                <p> __ ANALAMANAGA</p>
                <br></br>
                <h3>Date debut</h3>
                <p> __ 12/10/2022</p>
                <br></br>
                <h3>Date fin</h3>
                <p> __ 25/12/2022</p>
                <h3>Statut</h3>
                <p> __ termine</p>
                <br></br>
                </IonCardContent>
        </IonCard>


      </IonContent>
      <IonTabBar slot="top">
          <IonTabButton>
            <IonIcon icon={wifi} />
          </IonTabButton>
          <IonTabButton>
            <IonIcon icon={add} />
          </IonTabButton>
          <IonTabButton>
            <IonIcon icon={person} />
          </IonTabButton>
          
      </IonTabBar>
        
    </IonPage>
  );
};

export default fiche;
