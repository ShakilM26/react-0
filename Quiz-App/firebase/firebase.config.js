import {initializeApp} from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBX8NJp3IHPAY_cZOPmbfC7ShFc7g6VS-I",
  authDomain: "quiz-app-70de9.firebaseapp.com",
  projectId: "quiz-app-70de9",
  storageBucket: "quiz-app-70de9.firebasestorage.app",
  messagingSenderId: "674231335448",
  appId: "1:674231335448:web:bac23f89fe03ab3547a16d"
};

// Intialize Firebase
const app = initializeApp(firebaseConfig)
export default app;