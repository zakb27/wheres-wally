/ Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCVo3RXFeRUzYOe6nirGFoT_Vs8H1_yj3A",
    authDomain: "wheres-wally-c5204.firebaseapp.com",
    projectId: "wheres-wally-c5204",
    storageBucket: "wheres-wally-c5204.appspot.com",
    messagingSenderId: "489357749422",
    appId: "1:489357749422:web:95f318c4f4ffe0fb2d113f",
    measurementId: "G-JH9J9WPHPW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);