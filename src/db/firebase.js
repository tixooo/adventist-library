import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database'


const firebaseConfig = {
    apiKey: "AIzaSyD5iGXUNEX_ijJQzSklOQU6pbVhXpCbEfo",
    authDomain: "casd-library.firebaseapp.com",
    databaseURL: "https://casd-library-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "casd-library",
    storageBucket: "casd-library.appspot.com",
    messagingSenderId: "555827680460",
    appId: "1:555827680460:web:cb41fcb0d7d64217605e69",
    measurementId: "G-63BS53NCPH"
  };

const app = initializeApp(firebaseConfig);
const db = getDatabase(app)

  export default db