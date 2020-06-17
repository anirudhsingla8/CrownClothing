import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCGEbgUr9z1pxsq-RXuqGgB9kTPZHp0qLY",
    authDomain: "crwn-db-5bcb3.firebaseapp.com",
    databaseURL: "https://crwn-db-5bcb3.firebaseio.com",
    projectId: "crwn-db-5bcb3",
    storageBucket: "crwn-db-5bcb3.appspot.com",
    messagingSenderId: "605520341352",
    appId: "1:605520341352:web:819c1496311ba605cb8edd",
    measurementId: "G-ZLFCN1CC36"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;