import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAsO7XKT255WS0eSL425ro8zyhJKLV9YdM",
  authDomain: "callerregister.firebaseapp.com",
  projectId: "callerregister",
  storageBucket: "callerregister.appspot.com",
  messagingSenderId: "52009717298",
  appId: "1:52009717298:web:5ce23d764b4a1ba72d362b",
  measurementId: "G-P43YR64Q2W"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
