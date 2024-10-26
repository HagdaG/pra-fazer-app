import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyBKyH66OTFKbVy9IQxPgIdUC2qnpbuT9Pc",
  authDomain: "pra-fazer-app-6a98d.firebaseapp.com",
  databaseURL: "https://pra-fazer-app-6a98d-default-rtdb.firebaseio.com",
  projectId: "pra-fazer-app-6a98d",
  storageBucket: "pra-fazer-app-6a98d.appspot.com",
  messagingSenderId: "131167409274",
  appId: "1:131167409274:web:335b0c99a814270f2257c3"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getDatabase(app);

export { auth, db };