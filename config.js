import * as firebase from 'firebase'
require('@firebase/firestore')

var firebaseConfig = {
  apiKey: "AIzaSyALgLnhKWkMNOaL6eVWWrDJq3Jn4cO9g24",
  authDomain: "library-c3b0e.firebaseapp.com",
  projectId: "library-c3b0e",
  storageBucket: "library-c3b0e.appspot.com",
  messagingSenderId: "40658284408",
  appId: "1:40658284408:web:1bb39b7705632ecb23a28d"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
  export default firebase.firestore();
