// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyAmTgeaZOeWqAWpuq_IfO6Ssvctz_waHxQ",
    authDomain: "challenge-f7384.firebaseapp.com",
    projectId: "challenge-f7384",
    storageBucket: "challenge-f7384.appspot.com",
    messagingSenderId: "473537423117",
    appId: "1:473537423117:web:59d8b3e3ae160d48177244",
    measurementId: "G-WP8Q5BBFVV"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)
  const db = firebaseApp.firestore()
  const auth = firebase.auth()

  export {db , auth} 