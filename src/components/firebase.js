import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyC_hGyj2pDN3I4hz7tJqfjsqnDGfC8C-Ig",
  authDomain: "clone-again.firebaseapp.com",
  projectId: "clone-again",
  storageBucket: "clone-again.appspot.com",
  messagingSenderId: "64995540833",
  appId: "1:64995540833:web:7228b8da1283aee9d14f20",
  measurementId: "G-9G1RWV8CT0",
};

const firebaseapp = firebase.initializeApp(firebaseConfig);
const db = firebaseapp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.EmailAuthProvider();

export { provider, auth };
export default db;
