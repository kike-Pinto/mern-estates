// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: 'mern-estates-2c5d0.firebaseapp.com',
  projectId: 'mern-estates-2c5d0',
  storageBucket: 'mern-estates-2c5d0.appspot.com',
  messagingSenderId: '870516271372',
  appId: '1:870516271372:web:967c6f03deca8d832e8129',
}

// Initialize Firebase
export const app = initializeApp(firebaseConfig)
