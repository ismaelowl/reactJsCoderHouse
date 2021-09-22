import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCTurr9A2xpxdUJTGDmB0dd3WWWOrXY2Kc",
    authDomain: "ecommercejs-12415.firebaseapp.com",
    projectId: "ecommercejs-12415",
    storageBucket: "ecommercejs-12415.appspot.com",
    messagingSenderId: "411464961502",
    appId: "1:411464961502:web:6034c3203c2146f17ba14f"
}

const app = firebase.initializeApp(firebaseConfig)
export const firestore = firebase.firestore(app)