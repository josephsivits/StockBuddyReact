//import * as firebase from "firebase";
//import * as firebase from 'react-native-firebase'
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// Your web app's Firebase configuration
// no peeking
const firebaseConfig = {
  apiKey: "AIzaSyCD3YBeTDti7BTuZcU9bekhEZar9bCPARY",
  authDomain: "rn-stockbuddy.firebaseapp.com",
  projectId: "rn-stockbuddy",
  storageBucket: "rn-stockbuddy.appspot.com",
  messagingSenderId: "811427706431",
  appId: "1:811427706431:web:32b518dbb53d9f0f642a8a"
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