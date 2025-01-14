
//Actualiza el año en el footer
const currentYear = new Date().getFullYear();
document.getElementById("yearDate").textContent = currentYear;

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBLdjpCuIm8Xzmta-hyJzn_CBulIkZWGk8",
    authDomain: "electrosoluciones-urgentes.firebaseapp.com",
    projectId: "electrosoluciones-urgentes",
    storageBucket: "electrosoluciones-urgentes.firebasestorage.app",
    messagingSenderId: "165828666893",
    appId: "1:165828666893:web:512875c1b263d8f1eb5744",
    measurementId: "G-TWR4D96S9B"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);