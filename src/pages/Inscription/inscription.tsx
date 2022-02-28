import { IonContent,IonImg,IonRippleEffect,IonInput,IonTabs,IonTabButton,IonHeader, IonPage, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonItem, IonIcon, IonLabel, IonButton  } from '@ionic/react';
import './inscription.css';
import {useHistory} from 'react-router-dom';
import React, {useEffect, useState} from 'react';
const Inscription: React.FC = () => {
  const [mail,setMail]=useState("");
const [mdp,setMdp]=useState("");
const [nom,setNom]=useState("");
const [mess,setMess]=useState("");
const history=useHistory();
const login=()=> {
  const url="https://test-rojo.herokuapp.com/utilisateurs/"+nom+"/"+mdp+"/"+mail;
  const options={
    method:'POST'
  };
  fetch(url,options).then((res)=>{
    if(res.ok)
    {
       return res.json();
    }
   throw res;
  })
  .then((data)=>{
     if(data.valide==0)
     {
       history.push("/login");
     }
     else if(data.valide!=0)
     {
          alert(data.erreur);
     }
 });
   
};
    return (
        <IonPage>
        <IonHeader>
        <IonToolbar>
          <IonTitle><h1>Inscription</h1></IonTitle>
      </IonToolbar>
        </IonHeader>
        <IonContent>
          <IonCard>
           
  
            
            <IonCardContent>
            <IonImg className='logo' src="assets/icon/téléchargement.png"/>
            <IonItem>
              <IonInput type="text" name="nom" value={nom} onIonChange={(e) =>setNom(e.detail.value!)} placeholder="Saisissez votre nom"> </IonInput>
            </IonItem>
            <br></br>
            <IonItem>
              <IonInput type="password" name="mdp" value={mdp} onIonChange={(e) =>setMdp(e.detail.value!)} placeholder="Saisissez votre mot de passe"> </IonInput>
            </IonItem>
            <br></br>
            <IonItem>
              <IonInput type="text" name="mail" value={mail} onIonChange={(e) =>setMail(e.detail.value!)} placeholder="Saisissez votre e-mail"> </IonInput>
            </IonItem>
            </IonCardContent>
  
            <br></br>
            <IonButton onClick={login} className="boton" type="submit" size="large" >S'inscrire</IonButton>
            <br></br>
            <p></p>
            
        </IonCard>
        </IonContent>
      </IonPage>
    );
  };
  
  export default Inscription;
