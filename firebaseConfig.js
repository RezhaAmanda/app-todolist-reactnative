// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {getAnalytics} from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDqvHQtrmN6rEy8-LnlqEqu9mT6ARuIXpM",
  authDomain: "app-todo-list-fb353.firebaseapp.com",
  projectId: "app-todo-list-fb353",
  storageBucket: "app-todo-list-fb353.firebasestorage.app",
  messagingSenderId: "424806243793",
  appId: "1:424806243793:web:18fc29067e050786ee14f0",
  measurementId: "G-Q3KSL4DJ0E"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { app,db };