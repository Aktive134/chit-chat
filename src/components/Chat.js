/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useContext, useEffect } from 'react'
import {
  addDoc,
  collection,
  serverTimestamp,
  onSnapshot,
  query,
  where,
  orderBy,
} from 'firebase/firestore'
import { db, auth } from '../firebase-config.js'
import '../styles/Chat.css'
import { Context } from '../Context'

const Chat = () => {
  const [newMessage, setNewMessage] = useState('')
  const [messages, SetMessages] = useState([])
  const [room] = useContext(Context)
  const messagesRef = collection(db, 'messages')

  useEffect(() => {
    const queryMessage = query(
      messagesRef,
      where('room', '==', room),
      orderBy('createdAt'),
    )
    const unsubscribe = onSnapshot(queryMessage, (snapshot) => {
      let messages = []
      snapshot.forEach((doc) => {
        messages.push({ ...doc.data(), id: doc.id })
      })
      SetMessages(messages)
    })
    return () => unsubscribe()
  }, [])

  const submitHandler = async (e) => {
    e.preventDefault()
    if (newMessage === '') return

    await addDoc(messagesRef, {
      text: newMessage,
      createdAt: serverTimestamp(),
      user: auth.currentUser.displayName,
      room,
    })
    setNewMessage('')
  }

  return (
    <div className="chat-container">
      <div className="header">
        <h1> Welcome to: {room.toUpperCase()}</h1>
      </div>
      <div className="messages">
        {messages.map((message) => (
          <div className="message" key={message.id}>
            <span className="user"> {message.user}: </span>
            {message.text}
          </div>
        ))}
      </div>
      <div className='form-container'>
      <form onSubmit={submitHandler} className="new-message-form">
        <input
          className="new-message-input"
          placeholder="Type your message here."
          onChange={(e) => setNewMessage(e.target.value)}
          value={newMessage}
        />
        <button type="submit" className="send-button">
          Send
        </button>
      </form>
      </div>
    </div>
  )
}

export default Chat
