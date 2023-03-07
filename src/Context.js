import { createContext, useState } from 'react'

export const Context = createContext()

export const ContextProvider = (props) => {
  const [room, setRoom] = useState(null)
  return (
    <Context.Provider value={[room, setRoom]}>
      {props.children}
    </Context.Provider>
  )
}
