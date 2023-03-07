import { useState, useContext } from 'react'
import Auth from './components/Auth'
import Cookies from 'universal-cookie'
import Chat from './components/Chat'
import Room from './components/Room'
import { Context } from './Context'
import './App.css'

const cookies = new Cookies()

function App() {
  const [isAuth, setIsAuth] = useState(cookies.get('auth-token'))
  const [room] = useContext(Context)

  if (!isAuth) {
    return (
      <div>
        <Auth setIsAuth={setIsAuth} />
      </div>
    )
  }
  return <div>{room ? <Chat /> : <Room />}</div>
}

export default App
