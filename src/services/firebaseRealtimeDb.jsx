// Import the functions you need from the SDKs you need
import { keys } from "../data/firebaseDbKeys";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: keys[0],
  authDomain: keys[1],
  databaseURL: keys[2],
  projectId: keys[3],
  storageBucket: keys[4],
  messagingSenderId: keys[5],
  appId: keys[6]
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);
export default firebase;
export const auth = getAuth(firebase);
