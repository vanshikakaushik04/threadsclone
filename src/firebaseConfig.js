import { initializeApp } from "firebase/app";
import {getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore'
import {getStorage } from 'firebase/storage';
const firebaseConfig = {
  apiKey: "AIzaSyAFGC0-s5eCqeWUL61OxlRgTETRnfItIjc",
  authDomain: "threadsclone-c35ce.firebaseapp.com",
  projectId: "threadsclone-c35ce",
  storageBucket: "threadsclone-c35ce.appspot.com",
  messagingSenderId: "60079502045",
  appId: "1:60079502045:web:448e39998a8c688375a134"
};
const app = initializeApp(firebaseConfig);
const auth= getAuth(app);
const database= getFirestore(app);
const storage =getStorage(app);

export { auth, app, database ,storage};