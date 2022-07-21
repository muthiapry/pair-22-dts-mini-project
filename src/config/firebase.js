import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: replace with your own config
const firebaseConfig = {
  apiKey: "AIzaSyCndr4goRuC778cxITItcK5Xqu9udQTkXY",
  authDomain: "pair-22-miniproject.firebaseapp.com",
  projectId: "pair-22-miniproject",
  storageBucket: "pair-22-miniproject.appspot.com",
  messagingSenderId: "488571336554",
  appId: "1:488571336554:web:aeee54405f4c8936659713",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
