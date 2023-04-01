// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider} from 'firebase/auth' 
import {getFirestore} from 'firebase/firestore';
import {getStorage} from 'firebase/storage'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB1JkULNqjaUByIu4wTtGOUoYnb0cO5l1s",
  authDomain: "fir-tutorial-9e2be.firebaseapp.com",
  projectId: "fir-tutorial-9e2be",
  storageBucket: "fir-tutorial-9e2be.appspot.com",
  messagingSenderId: "191987930036",
  appId: "1:191987930036:web:ca963c50079ca289fb98e1",
  measurementId: "G-68BL1HQ79C"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app)
export const googleProvider = new GoogleAuthProvider();

export const db = getFirestore(app);
export const storage = getStorage(app);
