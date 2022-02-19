import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyBKW-e65uzofigrTnzHHIAqDAd8ikTCuaA',
  authDomain: 'mymoney-693fd.firebaseapp.com',
  projectId: 'mymoney-693fd',
  storageBucket: 'mymoney-693fd.appspot.com',
  messagingSenderId: '934001709223',
  appId: '1:352456042381:web:4195bfeccca775aa533fc4',
  measurementId: 'G-3L5DFDF70R',
};

// init firebase
firebase.initializeApp(firebaseConfig);

// init services
const projectFirestore = firebase.firestore();
const projectAuth = firebase.auth();

export { projectFirestore, projectAuth };
