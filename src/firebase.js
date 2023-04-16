import firebase from "firebase/app"
import "firebase/firestore"
import 'firebase/storage';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: "agroseva-4fdc8.firebaseapp.com",
  databaseURL: "https://agroseva-4fdc8-default-rtdb.firebaseio.com",
  projectId: "agroseva-4fdc8",
  storageBucket: "agroseva-4fdc8.appspot.com",
  messagingSenderId: process.env.REACT_APP_messagingSenderId,
  appId: process.env.REACT_APP_appId,
  measurementId: "G-DLGQMVBWWM"
};


firebase.initializeApp(firebaseConfig)
// Initialize Cloud Firestore and get a reference to the service
const db = firebase.firestore()
const storage = firebase.storage();
// Initialize Firebase
export {db, storage}