// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBGJojhF59LmHcjw6_KDeXkNuyj3061le4",
    authDomain: "jaeyonging-625ad.firebaseapp.com",
    projectId: "jaeyonging-625ad",
    storageBucket: "jaeyonging-625ad.appspot.com",
    messagingSenderId: "519826376052",
    appId: "1:519826376052:web:70189d0a77b35940ad9821",
    measurementId: "G-RF9EGZ75CX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db }

