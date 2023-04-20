
import firebase from "firebase/compat/app";
// import "firebase/auth";
import "firebase/compat/firestore";

firebase.initializeApp({
  apiKey: "AIzaSyCTtAWH0wVgARbppkKR1JcGMYNbAvyGX8Y",
  authDomain: "dv-app-a159c.firebaseapp.com",
  projectId: "dv-app-a159c",
  storageBucket: "dv-app-a159c.appspot.com",
  messagingSenderId: "103054831326",
  appId: "1:103054831326:web:5658460d44a7f6e3805c4f",
  measurementId: "G-48KCJB3HGW",
});

const firestore = firebase.firestore();

export default firestore;