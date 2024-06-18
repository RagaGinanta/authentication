import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getAnalytics } from "firebase/analytics";
// TODO: replace with your own config
// confignya didapat dari halaman firebase kalian
// bisa dicek di https://firebase.google.com/
const firebaseConfig = {
 apiKey: "AIzaSyALCqKh3j6MrGOOzziwYjnQPTi4o6cxA2A",
  authDomain: "framwork-4ee29.firebaseapp.com",
  projectId: "framwork-4ee29",
  storageBucket: "framwork-4ee29.appspot.com",
  messagingSenderId: "880867244775",
  appId: "1:880867244775:web:d552ad2c492220f25e0042",
  measurementId: "G-QG8L2C6E7J"
};

const app = initializeApp(firebaseConfig);
// ambil auth dari firebase di sini sekali aja biar bisa dipakai berkali-kali
const auth = getAuth(app);

//diexport
export { auth };