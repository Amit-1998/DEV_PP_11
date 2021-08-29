import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCzZgYKfpxoHED12JXkKSGOMSGBfzg2LGU",
    authDomain: "resume-builder-fab5f.firebaseapp.com",
    projectId: "resume-builder-fab5f",
    storageBucket: "resume-builder-fab5f.appspot.com",
    messagingSenderId: "999542914181",
    appId: "1:999542914181:web:92301c9d978a45e0793dec"
  };

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();
