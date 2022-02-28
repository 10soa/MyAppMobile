import { BarcodeScanner } from '@awesome-cordova-plugins/barcode-scanner';
import { IonContent,IonSelect,IonSelectOption,IonActionSheet,IonGrid,IonCol,IonRow,IonRippleEffect,IonInput,IonTabs,IonTabButton,IonHeader, IonPage, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonItem, IonIcon, IonLabel, IonButton, IonTabBar, IonRouterLink, IonSlides, IonSlide  } from '@ionic/react';
import { IonFooter,IonImg,IonVirtualScroll,IonFab, IonFabButton, IonFabList } from '@ionic/react';
import { add, settings, share, person, arrowForwardCircle, arrowBackCircle, arrowUpCircle, logoVimeo, logoFacebook, logoInstagram, logoTwitter } from 'ionicons/icons';
import './insertion.css';
import { pin,triangle, wifi, wine, warning, walk } from 'ionicons/icons';
import inscription from '../Inscription/inscription';
import { defineCustomElements } from '@ionic/pwa-elements/loader';
import { camera, trash, close,logOutSharp,homeSharp } from 'ionicons/icons';
import { useState, useEffect} from 'react';
import React from 'react';
import { isPlatform } from '@ionic/react';
import { Camera, CameraResultType, CameraSource, Photo } from '@capacitor/camera';
import { Filesystem, Directory } from '@capacitor/filesystem';
import { Storage } from '@capacitor/storage';
import { Capacitor } from '@capacitor/core';
import { UsePhotoGallery, UserPhoto } from '../../hooks/usePhotoGallery';
import {useHistory} from 'react-router-dom';
import { Geolocation, Geoposition } from '@ionic-native/geolocation';
import axios from 'axios';
const Insertion: React.FC = () => {
  const { deletePhoto, photos, takePhoto } = UsePhotoGallery();
  const [photoToDelete, setPhotoToDelete] = useState<UserPhoto>();
  const [gender, setGender] = useState<string>();
  const[types,setTypes]=useState([]);
  const[count,setCount]=useState(true);
  const history=useHistory();
  const[typeSi,setTypeSi]=useState("");
  const [loading, setLoading] = useState<boolean>(false);
  const [position, setPosition] = useState<Geoposition>();
  const[comment,setComment]=useState("");
  const[util,setUtil]=useState(Object);
  const[id,setId]=useState("22");
 const img=new Array;
  const getLocation = async () => {
      setLoading(true);

      try {
          const position = await Geolocation.getCurrentPosition();
          setPosition(position);
          setLoading(false);
      } catch (e) {
          setLoading(false);
      }
  }
  useEffect(()=>
  {
  
    if(count==true)
    {
      getLocation();
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
              setUtil(data.ut);
              fetch(`https://test-rojo.herokuapp.com/typeSignalements`).then((res)=>{
                if(res.ok)
                {
                  return res.json();
                }
              throw res;
              })
              .then((data)=>{
                setTypes(data);
                console.log(types);
                setCount(false);
              });
          }
      });
    }
  });
  const select=types.map((type:{id:any,nom:any})=>
    <IonSelectOption value={type.id}>{type.nom}</IonSelectOption>
  );
 // position?.coords.latitude: x
 // position?.coords.longitude: y

 const insert=()=> {
  const url="https://test-rojo.herokuapp.com/signalement/"+typeSi+"/"+comment+"/"+position?.coords.latitude+"/"+position?.coords.longitude+"/"+util.id;
  console.log(url);

  
    let data=JSON.stringify({img});
    console.log(img);
    const options={
      method:'POST'
    };
   fetch(url,options).then((res)=>{
      if(res.ok)
      {
        return res.json();
      }
   })
   .then((data)=>{
      setId(data);
      console.log(data+" hihi");
      for(let i=0;i<photos.length;i++)
      {
          const option={
          method:'POST',
          body:JSON.stringify(photos[i].webviewPath)
          };
          fetch("https://test-rojo.herokuapp.com/detailSignalements/"+data,option).then((res)=>{
            if(res.ok)
            {
              return res.json();
            }
        })
      }
   });
  
};
return (
  //
  <IonPage>
  <IonHeader>
    <IonToolbar>
      <IonTitle>Insertion Signalement</IonTitle>
    </IonToolbar>
  </IonHeader>
  <IonContent>
  <IonHeader collapse="condense">
      <IonToolbar>
        <IonTitle size="large">Insertion Signalement</IonTitle>
      </IonToolbar>
    </IonHeader>
   
<IonCard>
         

         <form action="/acceuil" method='Get'>
         <IonCardContent>
         <IonItem>
         <IonLabel>Type Signalement</IonLabel>
            <IonSelect value={typeSi} placeholder="Select One" onIonChange={e => setTypeSi(e.detail.value)}>
            {select}
            </IonSelect>
         </IonItem>
         {}
         <br></br>
         <IonItem>
           <IonInput className="input" type="text" value={comment}  placeholder="Commentaire" onIonChange={e => setComment(e.detail.value!)}> </IonInput>
         </IonItem>
         <br></br>
         
         </IonCardContent>

        
         <br></br>
         <p></p>
         </form>

        
        
     
    <IonGrid>
      <IonRow>
        {photos.map((photo, index) => ( 
          <IonCol size="6" key={index}>
            <IonSlides>
                <IonSlide>
                <IonImg onClick={() => setPhotoToDelete(photo)} src={photo.webviewPath} />
                </IonSlide>
            </IonSlides>
            
          </IonCol>
        ))}
      </IonRow>
    </IonGrid>

   

    <IonActionSheet
      isOpen={!!photoToDelete}
      buttons={[{
        text: 'Delete',
        role: 'destructive',
        icon: trash,
        handler: () => {
          if (photoToDelete) {
            deletePhoto(photoToDelete);
            setPhotoToDelete(undefined);
          }
        }
      }, {
        text: 'Cancel',
        icon: close,
        role: 'cancel'
      }]}
      onDidDismiss={() => setPhotoToDelete(undefined)}
    />
     <br></br>
     <p className='ob'>Photo obligatoire ( max: 5)</p>
         <IonButton className="boton" type="submit" size="large" onClick={insert}>Inserez</IonButton>
</IonCard>


<IonFab vertical="bottom" horizontal="center" slot="fixed">
      <IonFabButton onClick={() => takePhoto()}>
        
        <IonIcon icon={camera}></IonIcon>
      </IonFabButton>
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

export default Insertion;