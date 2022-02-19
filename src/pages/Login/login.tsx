import { IonContent,IonThumbnail,IonImg,IonRippleEffect,IonInput,IonTabs,IonTabButton,IonHeader, IonPage, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonItem, IonIcon, IonLabel, IonButton  } from '@ionic/react';

import './login.css';
import { pin,triangle, wifi, wine, warning, walk } from 'ionicons/icons';
import inscription from '../Inscription/inscription';

const login: React.FC = () => {
  
  return (
    <IonPage>
      <IonHeader>
      <IonToolbar>
          <IonTitle><h1>Login</h1></IonTitle>
      </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonCard>
         

          <form action="/acceuil" method='Get'>
          <IonCardContent>
            <IonImg className='logo' src="assets/icon/téléchargement.png"/>
          <IonItem>
            <IonInput className="input" type="text" name="nom" placeholder="Entrez votre nom"> </IonInput>
          </IonItem>
          <br></br>
          <IonItem>
            <IonInput className="input" type="password" name="mdp" placeholder="Entrez votre mot de passe"> </IonInput>
          </IonItem>
          </IonCardContent>

          <br></br>
          <IonButton className="boton" type="submit" size="large" >Se connecter</IonButton>
          <br></br>
          <p></p>
          </form>

          <IonButton className="boton" href="/inscription" color="success" size="large">Inscription</IonButton>
         
        </IonCard>
        
           
          
      </IonContent>
    </IonPage>
  );
};

export default login;
