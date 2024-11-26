// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {getDatabase} from "firebase/database"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBXMiqIFPzfXdm_2iFB2k8xHduwvaDBU0o",
  authDomain: "pra-fazer-app-add86.firebaseapp.com",
  databaseURL: "https://pra-fazer-app-add86-default-rtdb.firebaseio.com",
  projectId: "pra-fazer-app-add86",
  storageBucket: "pra-fazer-app-add86.appspot.com",
  messagingSenderId: "420432091823",
  appId: "1:420432091823:web:8002b84a1ff06c90fbd25a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getDatabase(app);

export {auth, db};
