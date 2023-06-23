// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDixChOFQcqFMrdxujgmb_pAbtoJrii4zc",
    authDomain: "task-b8194.firebaseapp.com",
    projectId: "task-b8194",
    storageBucket: "task-b8194.appspot.com",
    messagingSenderId: "1087789240358",
    appId: "1:1087789240358:web:ff48147898701a183156e7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)