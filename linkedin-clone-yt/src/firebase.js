import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';



const firebaseConfig = {
    apiKey: "AIzaSyCXMijWYhJBqNkjRSTU3WGUs8hDYrPmPTQ",
    authDomain: "linkedin-clone-8f722.firebaseapp.com",
    projectId: "linkedin-clone-8f722",
    storageBucket: "linkedin-clone-8f722.appspot.com",
    messagingSenderId: "250129838094",
    appId: "1:250129838094:web:ba0f01885c8b3591924c5f"
  };


  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebaseApp.auth();
  
  export {auth};
  export default db;
