import firebase from 'firebase/app';
import 'firebase/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyAlmk_-g_QY0qVWReNk10tnBZeVVit9ZOI",
  authDomain: "biblio-lite-f1ff3.firebaseapp.com",
  projectId: "biblio-lite-f1ff3",
  storageBucket: "biblio-lite-f1ff3.appspot.com",
  messagingSenderId: "858195842144",
  appId: "1:858195842144:web:86bf605e1fbb15058ddf05"
};

firebase.initializeApp(firebaseConfig);

export default firebase;