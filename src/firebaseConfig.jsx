import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your Firebase project configuration
const firebaseConfig = {
    apiKey: "AIzaSyBqJdfICI1FYgRQgMweJnDyqPhfxCbD-o8",
    authDomain: "react-ap-325b0.firebaseapp.com",
    projectId: "react-ap-325b0",
    storageBucket: "react-ap-325b0.appspot.com",
    messagingSenderId: "210906484326",
    appId: "1:210906484326:web:d52e0b40814383c959e7a7",
    measurementId: "G-LE8ZPRKLX4"
};

// Initialize Firebase app
const app = initializeApp(firebaseConfig);

// Get Firestore database instance
export const db = getFirestore(app);
