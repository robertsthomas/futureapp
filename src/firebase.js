import firebase from 'firebase/app'
import 'firebase/firestore'

const config = {
  apiKey: "AIzaSyB9IpX8sHJRLORzBAWhLU1uwZ4sRQJrEqM",
  authDomain: "futureapp-cc4b9.firebaseapp.com",
  databaseURL: "https://futureapp-cc4b9.firebaseio.com",
  projectId: "futureapp-cc4b9",
  storageBucket: "futureapp-cc4b9.appspot.com",
  messagingSenderId: "558658960306",
  appId: "1:558658960306:web:0d1d7547639607321bc2ab"
};

firebase.initializeApp(config)

export const db = firebase.firestore();

export default firebase;




