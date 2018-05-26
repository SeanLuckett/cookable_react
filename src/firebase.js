import firebase from 'firebase';

const config = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: "cookable.firebaseapp.com",
  databaseURL: "https://cookable.firebaseio.com",
  projectId: "firebase-cookable",
  storageBucket: "firebase-cookable.appspot.com",
  messagingSenderId: "278992420831"
};

const fire = firebase.initializeApp(config);
export default fire;