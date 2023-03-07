import React, { useRef, useContext } from 'react'
import { Context } from '../Context'
import "../App.css"

function Room() {
    const [ setRoom ] = useContext(Context)
    const roomInputRef = useRef(null)
  return (
    <div className='room'>
        <label>Enter Room Name:</label>
        <input ref={roomInputRef}/>
        <button onClick={() => setRoom(roomInputRef.current.value)}> Enter Chat </button>
    </div>
  )
}

export default Room