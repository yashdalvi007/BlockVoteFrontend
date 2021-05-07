import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCK74oJbFycYzuMJPbwUrYJRzUWs32CfVc",
    authDomain: "block-vote-2ead0.firebaseapp.com",
    projectId: "block-vote-2ead0",
    storageBucket: "block-vote-2ead0.appspot.com",
    messagingSenderId: "947870991080",
    appId: "1:947870991080:web:01fac9056e85c0b6c77f5d",
    measurementId: "G-6VS01Y8MYV"
  };
  
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db, auth};