// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDQItNIgKYZ5HYBuCtWuMziNe6vS6qAk-s",
    authDomain: "my-pos-3fb94.firebaseapp.com",
    projectId: "my-pos-3fb94",
    storageBucket: "my-pos-3fb94.appspot.com",
    messagingSenderId: "620142482034",
    appId: "1:620142482034:web:6b2412dc5d77c6e97168eb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)