// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAuth, GoogleAuthProvider } from 'firebase/auth'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAzHSFfvS-1nQfpxkhxcK22nUWKHyv-2-g',
  authDomain: 'chitchat-8c1c0.firebaseapp.com',
  projectId: 'chitchat-8c1c0',
  storageBucket: 'chitchat-8c1c0.appspot.com',
  messagingSenderId: '414140207568',
  appId: '1:414140207568:web:f3751d266d6d22badde9d5',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
export const provider = new GoogleAuthProvider()
