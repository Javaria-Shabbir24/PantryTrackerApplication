// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDBzQNRGTc61uO7QbhrUmJMvvNRot0fHUk",
  authDomain: "pantrytrackerapplication.firebaseapp.com",
  projectId: "pantrytrackerapplication",
  storageBucket: "pantrytrackerapplication.appspot.com",
  messagingSenderId: "608375358748",
  appId: "1:608375358748:web:1c4c42ba71759b5334e6d9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);