import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyDLeFxqBFCX_TnD4IltoXs-SXE0Q6iTEIw',
  authDomain: 'react-todo-85b7a.firebaseapp.com',
  projectId: 'react-todo-85b7a',
  storageBucket: 'react-todo-85b7a.appspot.com',
  messagingSenderId: '477190331076',
  appId: '1:477190331076:web:f785eec278c9a32c0f8791'
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();

export { db, auth };
