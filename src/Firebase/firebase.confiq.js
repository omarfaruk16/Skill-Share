import { initializeApp } from "firebase/app";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC62-82cLKlcJkCFBW0CMot_QiCZYOBDdk",
  authDomain: "skill-share-1b2a3.firebaseapp.com",
  projectId: "skill-share-1b2a3",
  storageBucket: "skill-share-1b2a3.firebasestorage.app",
  messagingSenderId: "138737678015",
  appId: "1:138737678015:web:99ce79f97bb8475f4ff80a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;