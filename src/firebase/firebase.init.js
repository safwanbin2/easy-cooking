// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyClpdCgUXzpnT7vDuVKoaLyWx8WJ7S7Bv4",
  authDomain: "meal-db-64fd2.firebaseapp.com",
  projectId: "meal-db-64fd2",
  storageBucket: "meal-db-64fd2.appspot.com",
  messagingSenderId: "221573020999",
  appId: "1:221573020999:web:4178de48cbdff1eef86062"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;