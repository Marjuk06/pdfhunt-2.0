import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyCFfZ_3n8Xd3j_p31Ww8Xol_oAH41mrFI0',
  authDomain: 'pdfhunt2025.firebaseapp.com',
  databaseURL: 'https://pdfhunt2025-default-rtdb.firebaseio.com',
  projectId: 'pdfhunt2025',
  storageBucket: 'pdfhunt2025.firebasestorage.app',
  messagingSenderId: '563842614186',
  appId: '1:563842614186:web:0355787eca62cd6a5e21d3',
  measurementId: 'G-5225FFQ932',
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { app, db };

