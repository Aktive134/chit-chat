import React from 'react'
import { auth, provider } from '../firebase-config.js'
import { signInWithPopup } from 'firebase/auth'
import Cookies from 'universal-cookie'
import '../styles/Auth.css'

const cookies = new Cookies()

const Auth = ({ setIsAuth }) => {
  const GoogleSignInHandler = async () => {
    try {
      const data = await signInWithPopup(auth, provider)
      cookies.set('auth-token', data.user.refreshToken)
      setIsAuth(true)
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <div className="auth">
      <p> Sign In With Google To Continue </p>
      <button onClick={GoogleSignInHandler}> Sign In With Google </button>
    </div>
  )
}

export default Auth
