import { IonContent,IonRippleEffect,IonInput,IonTabs,IonTabButton,IonHeader, IonPage, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonItem, IonIcon, IonLabel, IonButton, IonTabBar, IonRouterLink  } from '@ionic/react';
import { IonFooter,IonFab, IonFabButton, IonFabList } from '@ionic/react';
import { add,logOutSharp, settings, share, person, arrowForwardCircle, arrowBackCircle, arrowUpCircle, logoVimeo, logoFacebook, logoInstagram, logoTwitter } from 'ionicons/icons';
import './acceuil.css';
import { arrowBackSharp,homeSharp,pin,triangle, wifi, wine, warning, walk,notificationsSharp,addCircleOutline} from 'ionicons/icons';
import inscription from '../Inscription/inscription';
import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {useHistory,useParams} from 'react-router-dom';


  // 192.168.88.27
   

export const Acceuil: React.FC = () => {
  const[listeC,setListeC]=useState([]);
  const[listeNV,setListeNV]=useState([]);
  const[listeT,setListeT]=useState([]);
  const { id }=useParams<{id:string}>();
  const[count,setCount]=useState(true);
  const[utili,setUtili]=useState(Object);
  const history=useHistory();
  useEffect(()=>
    {
      if(count==true)
      {
       // ph.pop();
        fetch(`https://test-rojo.herokuapp.com/tokenUtilisateur/`+localStorage.getItem("token")).then((res)=>{
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
                fetch(`https://test-rojo.herokuapp.com/signalementUtilisateurEnCours/`+utili.nom).then((res)=>{
                  if(res.ok)
                  {
                    return res.json();
                  }
                throw res;
                })
                .then((data)=>{
                    setListeC(data.lise_Signalement);
                    setCount(false);
              })
              .catch(err=> {
                console.log(err.message);
              });

              fetch(`https://test-rojo.herokuapp.com/signalementUtilsateurNonValide/`+utili.nom).then((res)=>{
                  if(res.ok)
                  {
                    return res.json();
                  }
                throw res;
                })
                .then((data)=>{
                    setListeNV(data.liste_Signalement);
                    setCount(false);
              })
              .catch(err=> {
                console.log(err.message);
              });

              fetch(`https://test-rojo.herokuapp.com/signalementUtilsateurTermine/`+utili.nom).then((res)=>{
                  if(res.ok)
                  {
                    return res.json();
                  }
                throw res;
                })
                .then((data)=>{
                    setListeT(data.liste_Signalement);
                    setCount(false);
              })
              .catch(err=> {
                console.log(err.message);
              });

            }
        });
    
    }
  });
  function chemin(id: any)
  {
      return "/Fiche/"+id;
  }
  const b=()=> {
    history.push("/Notif");
  };
const listeCC=listeC.map((lc:{id:any;commentaire:any;dateS:any;x:any;y:any;nom:any;mail:any;reg:any;type:any})=>
<IonCard className="acCard" routerLink={chemin(lc.id)}>
<IonCardHeader>
  <img  className='s' src="assets/icon/s.png"></img>
</IonCardHeader>
  <IonCardContent className='s1'>
    <h4 className='s2'><IonLabel className="typeS">{lc.type}</IonLabel></h4>
   <p>{lc.dateS}</p>
   <p><strong>Statut : </strong>En cours</p>

  </IonCardContent>
</IonCard>

);

const listeNNV=listeNV.map((lc:{id:any;commentaire:any;dateS:any;x:any;y:any;nom:any;mail:any;reg:any;type:any})=>
<IonCard className="acCard" routerLink={chemin(lc.id)} >
<IonCardHeader>
  <img  className='s' src="assets/icon/s.png"></img>
</IonCardHeader>
  <IonCardContent className='s1'>
    <h4 className='s2'><IonLabel className="typeS">{lc.type}</IonLabel></h4>
   <p>{lc.dateS}</p>
   <p><strong>Statut : </strong>Non assigné</p>

  </IonCardContent>
</IonCard>
);

const listeTT=listeT.map((lc:{id:any;commentaire:any;dateS:any;x:any;y:any;nom:any;mail:any;reg:any;type:any})=>
<IonCard className="acCard" routerLink={chemin(lc.id)}>
<IonCardHeader>
  <img  className='s' src="assets/icon/s.png"></img>
</IonCardHeader>
  <IonCardContent className='s1'>
    <h4 className='s2'><IonLabel className="typeS">{lc.type}</IonLabel></h4>
   <p>{lc.dateS}</p>
   <p><strong>Statut : </strong>Terminé</p>

  </IonCardContent>
</IonCard>
);

  return (
    <IonPage>
      
      <IonHeader>
      <IonToolbar>
          <IonTitle><h1 className='title'>Vos signalements <IonIcon className='not' icon={person} /></h1 >

           </IonTitle>
      </IonToolbar>
      </IonHeader>
      <IonContent>
        
      
           {listeCC}
           {listeNNV}
           {listeTT}
        
        <IonFab vertical="top" horizontal="start" slot="fixed">
         <IonRouterLink href="insertion"><IonFabButton>
            <IonIcon icon={add}/>
          </IonFabButton> </IonRouterLink> 
      </IonFab>
      </IonContent>
     
      <IonTabBar slot="top">
      <IonTabButton >
            <IonIcon icon={notificationsSharp} /> <IonRouterLink href="/Notif">Notifications </IonRouterLink>
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

export default Acceuil;
