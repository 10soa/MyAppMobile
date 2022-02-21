import { IonContent,IonRippleEffect,IonInput,IonTabs,IonTabButton,IonHeader, IonPage, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonItem, IonIcon, IonLabel, IonButton, IonTabBar, IonRouterLink  } from '@ionic/react';
import { IonFooter,IonFab, IonFabButton, IonFabList } from '@ionic/react';
import { add,logOutSharp, settings, share, person, arrowForwardCircle, arrowBackCircle, arrowUpCircle, logoVimeo, logoFacebook, logoInstagram, logoTwitter } from 'ionicons/icons';
import './acceuil.css';
import { arrowBackSharp,homeSharp,pin,triangle, wifi, wine, warning, walk,notificationsSharp,addCircleOutline} from 'ionicons/icons';
import inscription from '../Inscription/inscription';
import axios from 'axios';
import React, {useEffect, useState} from 'react';

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
  
   

export const Acceuil: React.FC = () => {
  const[sigs,setSigs]=useState([]);
 
useEffect(()=>
{
 fetch(`http://localhost:2004/signalementUtilisateur/test/1`).then((res)=>{
    if(res.ok)
    {
       return res.json();
    }
   throw res;
  })
  .then((data)=>{
      setSigs(data);
      console.log(sigs);
 });
});
 console.log(sigs);
 const list=sigs.map((ni:{reg: any,commentaire:any,id:any,dateS:any,x:any,y:any,nom:any,mail:any})=>
   <IonCard className="acCard">
   <IonCardHeader>
     <img  className='s' src="assets/icon/s.png"></img>
   </IonCardHeader>
     <IonCardContent className='s1'>
       <h4 className='s2'>{ni.reg}</h4>
      <p>12/12/2021</p>
       <IonRouterLink  href="#">plus de details</IonRouterLink>
 
     </IonCardContent>
   </IonCard>
   );
  return (
    <IonPage>
      
      <IonHeader>
      <IonToolbar>
          <IonTitle><h1 className='title'>Accueil <IonIcon className='not' icon={notificationsSharp} /></h1 >

           </IonTitle>
      </IonToolbar>
      </IonHeader>
      <IonContent>
        
      
            {list}
        
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
};

export default Acceuil;
