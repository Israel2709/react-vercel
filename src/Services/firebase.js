import firebase from 'firebase/app'
import 'realtime-database'

const firebaseConfig = {
    apiKey: "AIzaSyDWHtQ7Yb1FV-ulkYunbRmT43De2ozHxjo",
    authDomain: "react-vercel.firebaseapp.com",
    databaseURL: "https://react-vercel.firebaseio.com",
    projectId: "react-vercel",
    storageBucket: "react-vercel.appspot.com",
    messagingSenderId: "172836166849",
    appId: "1:172836166849:web:625f5065b5b57afb63c840"
};

firebase.initializeApp(firebaseConfig)

export default firebase