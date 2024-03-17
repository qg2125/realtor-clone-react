// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAhQX3UkjVdishlFqdDoAutkW671ear0WM",
  authDomain: "realtor-clone-react-ef0d7.firebaseapp.com",
  projectId: "realtor-clone-react-ef0d7",
  storageBucket: "realtor-clone-react-ef0d7.appspot.com",
  messagingSenderId: "896172331798",
  appId: "1:896172331798:web:05391cb96f67a0c2663637",
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();
