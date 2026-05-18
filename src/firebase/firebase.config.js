import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCas1_lKk9zq-dOhg5FRmzEwnOGh6pPEDA",
  authDomain: "drivefleet-209db.firebaseapp.com",
  projectId: "drivefleet-209db",
  storageBucket: "drivefleet-209db.firebasestorage.app",
  messagingSenderId: "780822673268",
  appId: "1:780822673268:web:ed3d1ecff5979ff2849e21",
  measurementId: "G-22VP6RMS45",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);