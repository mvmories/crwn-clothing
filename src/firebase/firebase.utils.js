import firebase from 'firebase/app';
import 'firebase/firestore'; //database
import 'firebase/auth'; // authorization

const config = {
  apiKey: "AIzaSyAHEQKgP7ntZpwq1Tw2AV2w4WqoNXZrDeI",
  authDomain: "crwn-db-8a353.firebaseapp.com",
  projectId: "crwn-db-8a353",
  storageBucket: "crwn-db-8a353.appspot.com",
  messagingSenderId: "649964797995",
  appId: "1:649964797995:web:9b66db414511643bd0aa6e",
  measurementId: "G-GK81HQQXJN"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;








