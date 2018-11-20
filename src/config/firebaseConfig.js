import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyDLYheAqSssHhoj-FDLJ0QLfwlKldNWdNA',
  authDomain: 'canary-social.firebaseapp.com',
  databaseURL: 'https://canary-social.firebaseio.com',
  projectId: 'canary-social',
  storageBucket: 'canary-social.appspot.com',
  messagingSenderId: '98672114592'
};

firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;
