import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDh2VBVIoGyLHsEla-Gi7DI-eVVquKbspw",
  authDomain: "laboratorio-949e7.firebaseapp.com",
  projectId: "laboratorio-949e7",
  storageBucket: "laboratorio-949e7.appspot.com",
  messagingSenderId: "1021135424862",
  appId: "1:1021135424862:web:f6daefe83ded97895313cf"
};


const app = initializeApp(firebaseConfig);


const db = getFirestore(app);

export default db;