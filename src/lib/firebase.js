// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDs73i9YndDg3HJxQcf0fjga0Lrb4KJzTI",
  authDomain: "ntf-clone-b487c.firebaseapp.com",
  projectId: "ntf-clone-b487c",
  storageBucket: "ntf-clone-b487c.firebasestorage.app",
  messagingSenderId: "725729057096",
  appId: "1:725729057096:web:d8d303dda0ebf79e377b7d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);