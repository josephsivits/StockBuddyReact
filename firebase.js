//import * as firebase from "firebase";
//import * as firebase from 'react-native-firebase'
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// Your web app's Firebase configuration
// no peeking
const firebaseConfig = {
  apiKey: "*",
  authDomain: "*",
  projectId: "*",
  storageBucket: "*",
  messagingSenderId: "*",
  appId: "*"
};



// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app()
}

const auth = firebase.auth()

export { auth };
// export default firebase