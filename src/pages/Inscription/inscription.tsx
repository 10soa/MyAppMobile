import { IonContent,IonImg,IonRippleEffect,IonInput,IonTabs,IonTabButton,IonHeader, IonPage, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonItem, IonIcon, IonLabel, IonButton  } from '@ionic/react';
import './inscription.css';
const inscription: React.FC = () => {
  
    return (
        <IonPage>
        <IonHeader>
        <IonToolbar>
          <IonTitle><h1>Inscription</h1></IonTitle>
      </IonToolbar>
        </IonHeader>
        <IonContent>
          <IonCard>
           
  
            <form action="/acceuil" method='Get'>
            <IonCardContent>
            <IonImg className='logo' src="assets/icon/téléchargement.png"/>
            <IonItem>
              <IonInput type="text" name="nom" placeholder="Saisissez votre nom"> </IonInput>
            </IonItem>
            <br></br>
            <IonItem>
              <IonInput type="password" name="mdp" placeholder="Saisissez votre mot de passe"> </IonInput>
            </IonItem>
            <br></br>
            <IonItem>
              <IonInput type="text" name="mail" placeholder="Saisissez votre e-mail"> </IonInput>
            </IonItem>
            </IonCardContent>
  
            <br></br>
            <IonButton className="boton" type="submit" size="large" >S'inscrire</IonButton>
            <br></br>
            <p></p>
            </form>
        </IonCard>
        </IonContent>
      </IonPage>
    );
  };
  
  export default inscription;
