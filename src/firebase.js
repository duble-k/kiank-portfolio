// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.REACT_APP_api_key,
  authDomain: "portfolio-guest-book-a8b9f.firebaseapp.com",
  projectId: "portfolio-guest-book-a8b9f",
  storageBucket: "portfolio-guest-book-a8b9f.appspot.com",
  messagingSenderId: process.env.REACT_APP_messaging_id,
  appId: "1:1028705775200:web:430580ede3b9a377fb9d05",
  measurementId: "G-15M2FXH9KL"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);
const firestore = getFirestore(firebaseApp);

export { auth, firestore };