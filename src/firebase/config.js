import * as firebase from "firebase/app";
import 'firebase/storage';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyD_gwTiitAloHeMkXZBWdCmP9q0MToNaMI",
  authDomain: "photo-gallery-76678.firebaseapp.com",
  databaseURL: "https://photo-gallery-76678.firebaseio.com",
  projectId: "photo-gallery-76678",
  storageBucket: "photo-gallery-76678.appspot.com",
  messagingSenderId: "497108513228",
  appId: "1:497108513228:web:ce2fbcdc1a7992158bed69",
  measurementId: "G-7ECYYL1M4K"
};


firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;


export {projectFirestore,projectStorage,timestamp};
