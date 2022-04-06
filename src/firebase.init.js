// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBfGNgYFlvg4YSZgHyWqcGzzR8h83Iaw_0",
  authDomain: "simple-firebase-authenti-21f4d.firebaseapp.com",
  projectId: "simple-firebase-authenti-21f4d",
  storageBucket: "simple-firebase-authenti-21f4d.appspot.com",
  messagingSenderId: "296828341835",
  appId: "1:296828341835:web:9976c2b7080e04f64ec7ce"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app