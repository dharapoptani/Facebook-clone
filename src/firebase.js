import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDpzsmsollRJ3JX_tBus3THGDcWO7Cllxg",
  authDomain: "facebook-clone-fa140.firebaseapp.com",
  projectId: "facebook-clone-fa140",
  storageBucket: "facebook-clone-fa140.appspot.com",
  messagingSenderId: "1067397979725",
  appId: "1:1067397979725:web:43619f07767dbbe4c44604",
  measurementId: "G-F451M55NF4",
};

const app = firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const db = app.firestore();

export { auth, provider };
export default db;
