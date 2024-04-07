// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration


const firebaseConfig = {
  apiKey: "AIzaSyDjGgVAr2YfImeJA-Lrq6BN3f6UqZ_XQkk",
  authDomain: "urbanhive-12706.firebaseapp.com",
  projectId: "urbanhive-12706",
  storageBucket: "urbanhive-12706.appspot.com",
  messagingSenderId: "338022797459",
  appId: "1:338022797459:web:d0a5e86475e410bff47d66"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const fireDB = getFirestore(app);
const auth = getAuth(app);

export { fireDB, auth }