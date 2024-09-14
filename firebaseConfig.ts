import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyAUM85LtWDwViuOijnJi23mG7hLoFET6ys",
  authDomain: "prag-back.firebaseapp.com",
  projectId: "prag-back",
  storageBucket: "prag-back.appspot.com",
  messagingSenderId: "321664424434",
  appId: "1:321664424434:web:ca036966febb75d643736b",
  measurementId: "G-GSPKRPWH4C",
  databaseURL: "https://prag-back-default-rtdb.europe-west1.firebasedatabase.app/"
};

// Inizializza Firebase
const app = initializeApp(firebaseConfig);

// Inizializza Realtime Database
const database = getDatabase(app);

export { database };
