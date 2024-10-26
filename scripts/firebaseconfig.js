import { getDataBase } from "firebase/database"; 

const firebaseConfig = {
    a
    const firebaseConfig = {
      apiKey: "AIzaSyBKyH66OTFKbVy9IQxPgIdUC2qnpbuT9Pc",
      authDomain: "pra-fazer-app-6a98d.firebaseapp.com",
      databaseURL: "https://pra-fazer-app-6a98d-default-rtdb.firebaseio.com",
      projectId: "pra-fazer-app-6a98d",
      storageBucket: "pra-fazer-app-6a98d.appspot.com",
      messagingSenderId: "131167409274",
      appId: "1:131167409274:web:335b0c99a814270f2257c3"
    };
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const auth = getAuth(app);
    const db = getDataBase(app);

    export { auth, db};
}