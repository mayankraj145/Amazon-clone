// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDtMjC3FLTg6Og4V2xUC1pRBGcZxbAaG9c",
    authDomain: "reactjs-68f43.firebaseapp.com",
    projectId: "reactjs-68f43",
    storageBucket: "reactjs-68f43.appspot.com",
    messagingSenderId: "669790269009",
    appId: "1:669790269009:web:81bebd9f19f065d6b5d270",
    measurementId: "G-G9DLN1Y1X4"
  };
  
  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export {db , auth}