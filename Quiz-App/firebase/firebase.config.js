import {initializeApp} from "firebase/app";

const firebaseConfig = {
  apiKey: "****************",
  authDomain: "**************",
  projectId: "*************",
  storageBucket: "***********",
  messagingSenderId: "***********",
  appId: "****************"
};

// Intialize Firebase
const app = initializeApp(firebaseConfig)

export default app;
