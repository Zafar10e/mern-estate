// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: "mern-estate-ea9d9.firebaseapp.com",
    projectId: "mern-estate-ea9d9",
    storageBucket: "mern-estate-ea9d9.appspot.com",
    messagingSenderId: "617102957020",
    appId: "1:617102957020:web:dc2844a02f900d5549d719"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);