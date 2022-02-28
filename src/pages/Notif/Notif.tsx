import { IonItemOptions,IonItemOption,IonItemSliding,IonContent,IonRippleEffect,IonInput,IonTabs,IonTabButton,IonHeader, IonPage, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonItem, IonIcon, IonLabel, IonButton, IonTabBar, IonRouterLink  } from '@ionic/react';
import { IonFooter,IonList,IonFab, IonFabButton, IonFabList } from '@ionic/react';
import { add, settings, share, person, arrowForwardCircle, arrowBackCircle, arrowUpCircle, logoVimeo, logoFacebook, logoInstagram, logoTwitter } from 'ionicons/icons';
import './Notif.css';
import { closeCircleSharp,pin,triangle,logOutSharp,homeSharp,arrowBackSharp, wifi, wine, warning, walk } from 'ionicons/icons';
import inscription from '../Inscription/inscription';
import React, {useEffect, useState} from 'react';
import {useHistory} from 'react-router-dom';

export const Notif: React.FC = () => {
  const[listeC,setListeC]=useState([]);
  const[count,setCount]=useState(true);
  const[utili,setUtili]=useState(Object);
  const history=useHistory();
  useEffect(()=>
    {
      if(count==true)
      {
       // ph.pop();
        fetch(`http://localhost:2004/tokenUtilisateur/`+localStorage.getItem("token")).then((res)=>{
          if(res.ok)
          {
            return res.json();
          }
        })
        .then((data)=>{
          console.log("token="+localStorage.getItem("token"));
            if(data.token==false)
            {
                history.push("/login");
            }
            else if(data.token==true)
            {
                setUtili(data.ut);
                fetch(`http://localhost:2004/notifications/`+utili.id).then((res)=>{
                  if(res.ok)
                  {
                    return res.json();
                  }
                throw res;
                })
                .then((data)=>{
                    setListeC(data.liste_notification);
                    setCount(false);
              })
              .catch(err=> {
                console.log(err.message);
              });
            }
        });
    
    }
  });

  const listeCC=listeC.map((lc:{dateDebut:any;dateFin:any;idNotification:any;idSignalement:any;statut:any})=>
  <IonItemSliding>
    <IonItem className='notif'>
    <img  className='sn' src="assets/icon/s.png"></img>
    <IonLabel className='sn1'>Signalement  <IonIcon className='x' color="success" icon={closeCircleSharp}/>
    <p className='wrap'>-------------</p> 
    </IonLabel>
    <p className='date'> Terminé le : {lc.dateFin}</p>  
    </IonItem>
  </IonItemSliding>
  );

  return (
    <IonPage>
      <IonHeader>
      <IonToolbar>
          <IonTitle> <IonIcon className='retour' icon={arrowBackSharp}/><h1 className='title1'>Notifications </h1> </IonTitle>
         
      </IonToolbar>
      </IonHeader>
      <IonContent>
      <IonList typeof='full'>
     
      </IonList>

      {listeCC}
        
        
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
