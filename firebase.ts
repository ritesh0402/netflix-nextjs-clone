// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyD3-WSpqv49R2QSKHRLFzSpJOndnXTmcfg",
//   authDomain: "netflix-nextjs-clone-a1be9.firebaseapp.com",
//   projectId: "netflix-nextjs-clone-a1be9",
//   storageBucket: "netflix-nextjs-clone-a1be9.appspot.com",
//   messagingSenderId: "499833533103",
//   appId: "1:499833533103:web:7d96761f7e98f45a259a5a"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);


// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
   apiKey: "AIzaSyD3-WSpqv49R2QSKHRLFzSpJOndnXTmcfg",
   authDomain: "netflix-nextjs-clone-a1be9.firebaseapp.com",
   projectId: "netflix-nextjs-clone-a1be9",
   storageBucket: "netflix-nextjs-clone-a1be9.appspot.com",
   messagingSenderId: "499833533103",
   appId: "1:499833533103:web:7d96761f7e98f45a259a5a",
   databaseURL: 'https://next-firebase-stripe-39bf8-default-rtdb.firebaseio.com',
}
// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const auth = getAuth()

export default app
export { auth, db }