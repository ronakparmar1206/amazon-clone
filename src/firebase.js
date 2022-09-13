import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyA0cL_doH-wYSp_wv5FgLGVSh78gr-nDWY",
  authDomain: "clone-f3039.firebaseapp.com",
  projectId: "clone-f3039",
  storageBucket: "clone-f3039.appspot.com",
  messagingSenderId: "898226497809",
  appId: "1:898226497809:web:776911967eb82eedc344b0",
  measurementId: "G-J69M1RR1JL",
};
// Use this to initialize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);
// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();
export { auth, db };
