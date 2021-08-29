import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

// With version 9 things changed a bit for importing firebase, but there is no need to downgrade to a previous version, there is a "compatibility" option so can use the /compat folder in your imports, like this

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

export default firebase;