import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { collection, doc, getDoc, query, where, getDocs, orderBy, limit,setDoc,addDoc } from "firebase/firestore";
import {keys} from './keys'
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: keys.apiKey,
    databaseURL:keys.databaseURL,
    authDomain: keys.authDomain,
    projectId: keys.projectId,
    storageBucket: keys.storageBucket,
    messagingSenderId: keys.messagingSenderId,
    appId: keys.appId,
    measurementId: keys.measurementId,
    experimentalForceLongPolling: keys.experimentalForceLongPolling
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {db, collection, doc, getDoc, query, where, getDocs,orderBy ,limit,setDoc,addDoc };
