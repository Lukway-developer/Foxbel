import React, { useState } from 'react'

const Context = React.createContext({})

export function UserContext ({ children }) {
  const [userContext, setUserContext] = useState([])

  return (
    <Context.Provider value={{ userContext, setUserContext }}>
      {children}
    </Context.Provider>
  )
}

export default Context
