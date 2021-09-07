import  firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import 'firebase/compat/auth';
const firebaseConfig = {

    apiKey: "AIzaSyCvjJpX8LXQCn1EQmhOIjQ2Af-DeNeMh-E",
  
    authDomain: "vue-blog-system-392dd.firebaseapp.com",
  
    projectId: "vue-blog-system-392dd",
  
    storageBucket: "vue-blog-system-392dd.appspot.com",
  
    messagingSenderId: "506235083100",
  
    appId: "1:506235083100:web:76b74f1f65f9e5ce79c999"
  
  };
//init firebase
firebase.initializeApp(firebaseConfig)

let db=firebase.firestore();
//dababase setup
export {db}
  