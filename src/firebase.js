import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDiETvhIBFdZPXppfezdDEDRJ8eZVi2r8I",
    authDomain: "poultry-management-40da7.firebaseapp.com",
    databaseURL: "https://poultry-management-40da7-default-rtdb.firebaseio.com",
    projectId: "poultry-management-40da7",
    storageBucket: "poultry-management-40da7.firebasestorage.app",
    messagingSenderId: "965883595132",
    appId: "1:965883595132:web:e3a1db3c07f88070663cf9",
    measurementId: "G-0BLJKWG5ZJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };


