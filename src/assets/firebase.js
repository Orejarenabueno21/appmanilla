// Import the functions you need from the SDKs you need
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAKmHQ99utjTjcyXvNXoAoa1da-I6d0ldQ",
  authDomain: "app-manillas.firebaseapp.com",
  databaseURL: "https://app-manillas-default-rtdb.firebaseio.com",
  projectId: "app-manillas",
  storageBucket: "app-manillas.appspot.com",
  messagingSenderId: "538883336691",
  appId: "1:538883336691:web:6441b633b358456d7a4a86",
  measurementId: "G-KTJN8JZVCB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore (app)
export {db}