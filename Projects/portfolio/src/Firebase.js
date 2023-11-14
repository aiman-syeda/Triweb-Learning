
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore } from "@firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyBJqZ1t7r64YAgvMQotLmaanhJwfZVrufI",
  authDomain: "portfolio-63549.firebaseapp.com",
  projectId: "portfolio-63549",
  storageBucket: "portfolio-63549.appspot.com",
  messagingSenderId: "909349529013",
  appId: "1:909349529013:web:8c969cbe3ae7ceb515e5fc",
  measurementId: "G-SRXB0XG1LN"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const firestore = getFirestore(app);
