// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDp_le0DR752bTeVL0_eOCj_A1vsUUa5lw",
  authDomain: "final-year-project-cdc19.firebaseapp.com",
  projectId: "final-year-project-cdc19",
  storageBucket: "final-year-project-cdc19.appspot.com",
  messagingSenderId: "629898903620",
  appId: "1:629898903620:web:d5ea1def0027d6f58f3c11",
  measurementId: "G-WSFRFYY08F"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
