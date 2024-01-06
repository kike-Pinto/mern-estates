// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: 'mern-estatess.firebaseapp.com',
  projectId: 'mern-estatess',
  storageBucket: 'mern-estatess.appspot.com',
  messagingSenderId: '883402020624',
  appId: '1:883402020624:web:ecd57a24a2198b08403795',
}

// Initialize Firebase
export const app = initializeApp(firebaseConfig)
