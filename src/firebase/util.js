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

export const createUserProfile = async (userAuth, additionalData) => {
  if (!userAuth) return;
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapshot = await userRef.get();
  if (!snapshot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (err) {
      console.log("error", err.message);
    }
  }
  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
