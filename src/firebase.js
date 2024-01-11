// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore"

import {getAuth, GoogleAuthProvider} from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  /* utama */
  apiKey: "AIzaSyAhkTvBvzxMCzy4vaaf7jk8-LWgieCxoZ0",

  authDomain: "webkelas-3d757.firebaseapp.com",

  projectId: "webkelas-3d757",

  storageBucket: "webkelas-3d757.appspot.com",

  messagingSenderId: "212100041826",

  appId: "1:212100041826:web:f128baaf95215ea42bd53b",

  measurementId: "G-BNEKZS4BCS"

/* sec */
/* apiKey: "AIzaSyCiId2YJAxd3PIXqAXNjx6hfZYycpQlzl0",
  authDomain: "web-kelas-1.firebaseapp.com",
  projectId: "web-kelas-1",
  storageBucket: "web-kelas-1.appspot.com",
  messagingSenderId: "797263276694",
  appId: "1:797263276694:web:7bc8be9e05f2f87adfb0b7" */
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();