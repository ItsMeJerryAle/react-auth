import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyACBaQOEh1bwsvF8gY-lTK-6aVpUu_DipU",
  authDomain: "react-auth-dev-d8183.firebaseapp.com",
  projectId: "react-auth-dev-d8183",
  storageBucket: "react-auth-dev-d8183.appspot.com",
  messagingSenderId: "100194708669",
  appId: "1:100194708669:web:43411dbbb6495163e29bd4"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const auth = getAuth();