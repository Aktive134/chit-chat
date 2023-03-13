import React, { useRef, useContext } from 'react'
import { Context } from '../Context'
import '../App.css'

const Room = () => {
  const [, setRoom] = useContext(Context)
  const roomInputRef = useRef(null)
  return (
    <div className="room">
      <h4>To test this chat app, you would have to sign into another browser<br/> and type in the same room name.</h4>
      {/* <h4>and type in the same room name</h4> */}
      <label>Enter Room Name:</label>
      <input ref={roomInputRef} />
      <button onClick={() => setRoom(roomInputRef.current.value)}>
        Enter Chat
      </button>
    </div>
  )
}

export default Room
