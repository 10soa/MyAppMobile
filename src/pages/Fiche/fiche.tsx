import { IonContent,IonRippleEffect,IonInput,IonTabs,IonTabButton,IonHeader, IonPage, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonItem, IonIcon, IonLabel, IonButton, IonTabBar, IonRouterLink, IonSlides, IonSlide  } from '@ionic/react';
import { IonFooter,IonImg,IonVirtualScroll, IonFabButton, IonFabList } from '@ionic/react';
import { add, settings, share, person, arrowForwardCircle, arrowBackCircle, arrowUpCircle, logoVimeo, logoFacebook, logoInstagram, logoTwitter } from 'ionicons/icons';
import './fiche.css';
import { pin,triangle, wifi, wine, warning, walk } from 'ionicons/icons';
import React ,{useState,useEffect} from 'react';
import inscription from '../Inscription/inscription';
import {useHistory} from 'react-router-dom';
export const Fiche: React.FC = () => {
  const[count,setCount]=useState(true);
  const[sigs,setSigs]=useState(Object);
  const[statut,setStatut]=useState("");
  const[valide,setValide]=useState(0);
  const[reg,setReg]=useState("-----");
  const history=useHistory();
  const [photos,setPhotos]=useState([]);
  const ph=new Array();
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
                fetch(`http://localhost:2004/signalements/19/1`).then((res)=>{
                  if(res.ok)
                  {
                    return res.json();
                  }
                throw res;
                })
                .then((data)=>{
                    setSigs(data.serv);
                    console.log(data.valide);
                    if(data.valide==0)
                    {
                      setStatut("Non assigné");
                    }
                    else if(data.valide==1)
                    {
                      setStatut(" deja assigne a la region "+sigs.region);
                      setValide(1);
                      setReg(sigs.region);
                    }
                    else if(data.valide==2)
                    {
                      setStatut(" termine le: "+sigs.termine);
                      setValide(2);
                      setReg(sigs.region);
                    }
                    setCount(false);
              })
              .catch(err=> {
                console.log(err.message);
              });
              fetch(`http://localhost:2004/signalement/details/19`).then((res)=>{
                if(res.ok)
                {
                  return res.json();
                }
              throw res;
              })
              .then((data)=>{
                 setPhotos(data);
                  setCount(false);
                  
            })
            .catch(err=> {
              console.log(err.message);
            });
            }
        });
    
    }
  });

  photos.map((photo)=>
    ph.push("data:image/jpeg;base64,"+photo)
    
  );
  console.log(ph);
  const photo=ph.map((p)=>

  <IonSlide>
  <img  className='ssp' src={p}></img>
 
  </IonSlide>
  );
  return (
    <IonPage>
      <IonHeader>
      <IonToolbar>
          <IonTitle><h1>Fiche </h1>
          <IonIcon icon="notifications-outline"/></IonTitle>
      </IonToolbar>
      </IonHeader>
      <IonContent>

        <IonCard className="acCard1">
            
                <IonCardContent className='s12'>
                    <IonSlides>
                  
                     
                        <IonSlide>
                          <img  className='s' src="assets/icon/s.png"></img>
                          </IonSlide>
                          <IonSlide>
                          <img  className='s' src="assets/icon/s.png"></img>
                          </IonSlide>
                          {photo}
                    </IonSlides>
                </IonCardContent>
        </IonCard>

        <IonCard className="accCard">
            <IonCardHeader>
               
            </IonCardHeader>
                <IonCardContent className='s11'  >
                
               <h3  ><IonLabel className="h33">Type de Signalement: </IonLabel> </h3>
               <p><IonLabel className="h32">{sigs.nom}</IonLabel></p>
                <br></br>
                <h3><IonLabel className="h33">Description</IonLabel></h3>
                <p><IonLabel className="h32">{sigs.commentaire}</IonLabel></p>
                <br></br>
                <h3><IonLabel className="h33">Publié le: </IonLabel></h3>
                <p><IonLabel className="h32"> {sigs.dateS}</IonLabel></p>
                <br></br>
                <h3><IonLabel className="h33">Region  </IonLabel></h3>
                <p><IonLabel className="h32"> {reg}</IonLabel></p>
                <br></br>
                <h3><IonLabel className="h33">Statut</IonLabel></h3>
                <p><IonLabel className="h32">{statut} </IonLabel></p>
               
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

export default Fiche;
