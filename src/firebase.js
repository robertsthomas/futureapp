import firebase from 'firebase/app'
import 'firebase/firestore'

const config = {
  
};

firebase.initializeApp(config)

export const db = firebase.firestore();

export default firebase;




