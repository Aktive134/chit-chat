import { useState, useContext } from 'react'
import Auth from './components/Auth'
import Cookies from 'universal-cookie'
import Chat from './components/Chat'
import Room from './components/Room'
import { signOut } from 'firebase/auth'
import { auth } from '../src/firebase-config'
import { Context } from './Context'
import './App.css'
import { Nav } from './components/Nav'

const cookies = new Cookies()

const App = () =>  {
  const [isAuth, setIsAuth] = useState(cookies.get('auth-token'))
  const [room, setRoom] = useContext(Context)
  const signOutHandler = async () => {
    await signOut(auth)
    cookies.remove('auth-token')
    setIsAuth(false)
    setRoom(null)
  }

  if (!isAuth) {
    return (
      <div>
        <Auth setIsAuth={setIsAuth} />
      </div>
    )
  }
  return (
    <>
      <Nav />
      {room ? <Chat /> : <Room />}
      <div className="sign-out">
        <button onClick={signOutHandler}> Sign Out </button>
      </div>
    </>
  )
}

export default App
