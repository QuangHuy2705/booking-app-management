import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

var firebaseConfig = {
  apiKey: "AIzaSyC7ZdBW1uF7TYd5KjqTv41yrvufltCffaI",
  authDomain: "hellovietnam223-6be0d.firebaseapp.com",
  databaseURL: "https://hellovietnam223-6be0d.firebaseio.com",
  projectId: "hellovietnam223-6be0d",
  storageBucket: "hellovietnam223-6be0d.appspot.com",
  messagingSenderId: "297704523439",
  appId: "1:297704523439:web:64cf1a93221a27b4"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export default firebase