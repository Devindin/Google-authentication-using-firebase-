import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyDE9LjIo09fSzI08scPpkFWPGTUvIBEpuk",
    authDomain: "test-firebase-f8f43.firebaseapp.com",
    projectId: "test-firebase-f8f43",
    storageBucket: "test-firebase-f8f43.firebasestorage.app",
    messagingSenderId: "812669378193",
    appId: "1:812669378193:web:adbe3c128989ae8c2aa930",
    measurementId: "G-2C1TNKH7FM",
    databaseURL: "https://test-firebase-f8f43-default-rtdb.firebaseio.com",
  };

  const app = initializeApp(firebaseConfig);

  export default app;
 