import { BarcodeScanner } from '@awesome-cordova-plugins/barcode-scanner';
import { IonContent,IonSelect,IonSelectOption,IonActionSheet,IonGrid,IonCol,IonRow,IonRippleEffect,IonInput,IonTabs,IonTabButton,IonHeader, IonPage, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonItem, IonIcon, IonLabel, IonButton, IonTabBar, IonRouterLink, IonSlides, IonSlide  } from '@ionic/react';
import { IonFooter,IonImg,IonVirtualScroll,IonFab, IonFabButton, IonFabList } from '@ionic/react';
import { add, settings, share, person, arrowForwardCircle, arrowBackCircle, arrowUpCircle, logoVimeo, logoFacebook, logoInstagram, logoTwitter } from 'ionicons/icons';
import './insertion.css';
import { pin,triangle, wifi, wine, warning, walk } from 'ionicons/icons';
import inscription from '../Inscription/inscription';
import { defineCustomElements } from '@ionic/pwa-elements/loader';
import { camera, trash, close,logOutSharp,homeSharp } from 'ionicons/icons';
import { useState, useEffect } from 'react';
import React from 'react';
import { isPlatform } from '@ionic/react';
import { Camera, CameraResultType, CameraSource, Photo } from '@capacitor/camera';
import { Filesystem, Directory } from '@capacitor/filesystem';
import { Storage } from '@capacitor/storage';
import { Capacitor } from '@capacitor/core';
import { UsePhotoGallery, UserPhoto } from '../../hooks/usePhotoGallery';


const Insertion: React.FC = () => {
  const { deletePhoto, photos, takePhoto } = UsePhotoGallery();
  const [photoToDelete, setPhotoToDelete] = useState<UserPhoto>();
  const [gender, setGender] = useState<string>();

return (
  //
  <IonPage>
  <IonHeader>pwa-Elemets/
    <IonToolbar>
      <IonTitle>Choisissez des photos</IonTitle>
    </IonToolbar>
  </IonHeader>
  <IonContent>
  <IonHeader collapse="condense">
      <IonToolbar>
        <IonTitle size="large">Photo Gallery</IonTitle>
      </IonToolbar>
    </IonHeader>
    <IonCard className="acccCard">
    <IonGrid>
      <IonRow>
        {photos.map((photo, index) => (
          <IonCol size="6" key={index}>
            <IonSlides>
                <IonSlide>
                <IonImg onClick={() => "setPhotoToDelete(photo)"} src={photo.webviewPath} />
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
</IonCard>

<IonCard>
         

         <form action="/acceuil" method='Get'>
         <IonCardContent>
         <IonItem>
         <IonLabel>Type Signalement</IonLabel>
            <IonSelect value={gender} placeholder="Select One" onIonChange={e => setGender(e.detail.value)}>
              <IonSelectOption value="female">Destruction routiere</IonSelectOption>
              <IonSelectOption value="male">Ecroulement terrestre</IonSelectOption>
            </IonSelect>
         </IonItem>
         <br></br>
         <IonItem>
           <IonInput className="input" type="text" name="commentaire" placeholder="Commentaire"> </IonInput>
         </IonItem>
         <br></br>
         
         </IonCardContent>

         <br></br>
         <IonButton className="boton" type="submit" size="large" >Inserez</IonButton>
         <br></br>
         <p></p>
         </form>

        
        
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