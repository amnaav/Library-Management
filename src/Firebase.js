import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBb_xNyfW9txj_sMSALtLAj9ME7nF7X8eg",
  authDomain: "library-management-cd1d9.firebaseapp.com",
  projectId: "library-management-cd1d9",
  storageBucket: "library-management-cd1d9.firebasestorage.app",
  messagingSenderId: "3981459162",
  appId: "1:3981459162:web:6568138e16b8de0b722fe3",
  measurementId: "G-ZVBR89VWRY"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);