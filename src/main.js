// Firebase App (the core Firebase SDK) is always required and must be listed first
import firebase from "firebase/app";
// If you are using v7 or any earlier version of the JS SDK, you should import firebase using namespace import
// import * as firebase from "firebase/app"

// Add the Firebase products that you want to use
import "firebase/auth";
import "firebase/firestore";
import "firebase/firebase";
import { loginForm } from "./components/login.js";

// TODO: Replace the following with your app's Firebase project configuration
// For Firebase JavaScript SDK v7.20.0 and later, `measurementId` is an optional field
const firebaseConfig = {
    apiKey: "AIzaSyCkBIEn6wTOCQtM2pYbXL0J1Hs6XPyPTKg",
    authDomain: "lola-go.firebaseapp.com",
    projectId: "lola-go",
    storageBucket: "lola-go.appspot.com",
    messagingSenderId: "718307511199",
    appId: "1:718307511199:web:157ca92b02a35846238baa",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const content = document.getElementById("root");
content.appendChild(loginForm);