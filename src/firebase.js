// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
import { Firestore, getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCo-y_lKBQG07QZUEfjhDGfguOcerf0fGo",
    authDomain: "stylecraft-cec2a.firebaseapp.com",
    projectId: "stylecraft-cec2a",
    storageBucket: "stylecraft-cec2a.appspot.com",
    messagingSenderId: "637336633345",
    appId: "1:637336633345:web:7e978ddbe500569fc9c000"
  };

// Initialize Firebase

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db=getFirestore(app);

const analytics = getAnalytics(app);