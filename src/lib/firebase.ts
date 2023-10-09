// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCtj3He6x33G0WUjwwJeFWK-5IYVWzzHB4",
  authDomain: "book-catalog-client-713d0.firebaseapp.com",
  projectId: "book-catalog-client-713d0",
  storageBucket: "book-catalog-client-713d0.appspot.com",
  messagingSenderId: "114298416024",
  appId: "1:114298416024:web:e36f3818197d1a654bd9ed",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
