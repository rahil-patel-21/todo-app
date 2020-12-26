import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({    
apiKey: "AIzaSyDIsuLUINWg-JZWgRtqS0dKs-lZKXJUxDs",
authDomain: "todo-app-122020.firebaseapp.com",
projectId: "todo-app-122020",
storageBucket: "todo-app-122020.appspot.com",
messagingSenderId: "19273695519",
appId: "1:19273695519:web:a2d9ecae6609029a68702a",
measurementId: "G-BVECMJ8H3P"
});

const db = firebaseApp.firestore();

export default db;