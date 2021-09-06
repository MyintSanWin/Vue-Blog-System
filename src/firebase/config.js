import firebse from "firebase/app";
import "firebase/firestore"
const firebaseConfig = {

    apiKey: "AIzaSyCvjJpX8LXQCn1EQmhOIjQ2Af-DeNeMh-E",
  
    authDomain: "vue-blog-system-392dd.firebaseapp.com",
  
    projectId: "vue-blog-system-392dd",
  
    storageBucket: "vue-blog-system-392dd.appspot.com",
  
    messagingSenderId: "506235083100",
  
    appId: "1:506235083100:web:76b74f1f65f9e5ce79c999"
  
  };
//init firebase
firebse.initializeApp(firebaseConfig)

//dababase setup
let db=firebse.firestore();

export {db};
  