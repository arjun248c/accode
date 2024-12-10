
import './App.css'
import { Landing } from './components/Landing'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { Signin } from './components/signin';

const firebaseConfig = {
  apiKey: "AIzaSyBkbkQ-4tyF4q4gaPTKhQ3IJ9hAEu68-FE",
  authDomain: "accode-33128.firebaseapp.com",
  projectId: "accode-33128",
  storageBucket: "accode-33128.firebasestorage.app",
  messagingSenderId: "914945143078",
  appId: "1:914945143078:web:0406034ccf70f6d89291e7",
  measurementId: "G-WTSMT06W5J"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

function App() {


  return (
    <>
      <div>
        
      <Signin/>
      </div>
    </>
  )
}

export default App
