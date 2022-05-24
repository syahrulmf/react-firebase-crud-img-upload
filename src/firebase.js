import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDx3PN21rbNTpm9z_YR96JXT4la9WM2RhY",
  authDomain: "react-firebase-crud-d83c9.firebaseapp.com",
  projectId: "react-firebase-crud-d83c9",
  storageBucket: "react-firebase-crud-d83c9.appspot.com",
  messagingSenderId: "512907544732",
  appId: "1:512907544732:web:10df04987252e24df60559",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth();
