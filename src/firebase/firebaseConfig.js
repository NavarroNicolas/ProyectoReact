import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBhlvVThBao6ke8xOILPbeKrdeesW38q-g",
  authDomain: "nn-app-react.firebaseapp.com",
  projectId: "nn-app-react",
  storageBucket: "nn-app-react.appspot.com",
  messagingSenderId: "1044782906086",
  appId: "1:1044782906086:web:c700433e75f50f7424d927"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);