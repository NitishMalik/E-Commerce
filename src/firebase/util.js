import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyC9uC0CkM13TybjsKb6bRyZFMNhvUPYtwQ",
  authDomain: "shoppingsite-793a7.firebaseapp.com",
  databaseURL: "https://shoppingsite-793a7.firebaseio.com",
  projectId: "shoppingsite-793a7",
  storageBucket: "shoppingsite-793a7.appspot.com",
  messagingSenderId: "227962462717",
  appId: "1:227962462717:web:8247134d59b1a31203f994",
  measurementId: "G-RD2XX1RKQT"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const fireStore = firebase.firebaseStore;

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
