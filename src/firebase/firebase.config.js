// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCwUTZP7krj5jaxoy8iS5_Kmqumy6Wajk0",
  authDomain: "visa-navigator-3bc52.firebaseapp.com",
  projectId: "visa-navigator-3bc52",
  storageBucket: "visa-navigator-3bc52.firebasestorage.app",
  messagingSenderId: "494626407364",
  appId: "1:494626407364:web:d930eccdd37ccd4d609a91"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);