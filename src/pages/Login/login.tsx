import { IonContent,IonThumbnail,IonImg,IonRippleEffect,IonInput,IonTabs,IonTabButton,IonHeader, IonPage, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonItem, IonIcon, IonLabel, IonButton  } from '@ionic/react';

import './login.css';
import { pin,triangle, wifi, wine, warning, walk } from 'ionicons/icons';
import inscription from '../Inscription/inscription';
import React, {useEffect, useState} from 'react';
import {useHistory} from 'react-router-dom';
import { setMaxListeners } from 'process';
import axios from 'axios';

const Login: React.FC = () => {
const [mail,setMail]=useState("");
const [mdp,setMdp]=useState("");
const [mess,setMess]=useState("");
const history=useHistory();
const login=()=> {
  const url="http://localhost:2004/utilisateurs/"+mail+"/"+mdp;
  fetch(url).then((res)=>{
    if(res.ok)
    {
       return res.json();
    }
   throw res;
  })
  .then((data)=>{
     if(data.valide==true)
     {
       localStorage.setItem("token",data.token);
       history.push("/Acceuil");
     }
     else if(data.valide==false)
     {
          alert(data.erreur);
     }
 });
   
};
  return (
    <IonPage>
      <IonHeader>
      <IonToolbar>
          <IonTitle><h1>Login</h1></IonTitle>
      </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonCard>
         

          
          <IonCardContent>
            <IonImg className='logo' src="assets/icon/téléchargement.png"/>
          <IonItem>
            <IonInput className="input" type="text" name="nom" value={mail} onIonChange={(e) =>setMail(e.detail.value!)} placeholder="Entrez votre nom"> </IonInput>
          </IonItem>
          <br></br>
          <IonItem>
            <IonInput className="input" type="password" name="mdp" placeholder="Entrez votre mot de passe" value={mdp} onIonChange={(e) =>setMdp(e.detail.value!)}> </IonInput>
          </IonItem>
          </IonCardContent>

          <br></br>
          <IonButton className="boton" onClick={login} type="submit" size="large" >Se connecter</IonButton>
          <br></br>
          <p></p>

          <IonButton className="boton" href="/inscription" color="success" size="large">Inscription</IonButton>
         <p>{mail}</p>
        </IonCard>
        
           
          
      </IonContent>
    </IonPage>
  );
};

export default Login;
