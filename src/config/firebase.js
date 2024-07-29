// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDCkIlwUR19qwI3hT_tRDFOtalaAGggUPI",
  authDomain: "contact-list-91d96.firebaseapp.com",
  projectId: "contact-list-91d96",
  storageBucket: "contact-list-91d96.appspot.com",
  messagingSenderId: "398279996648",
  appId: "1:398279996648:web:8c2aed6b40bf6fc265055d"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);