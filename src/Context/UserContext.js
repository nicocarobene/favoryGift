import React, { useEffect, useState } from 'react'
import getAllFav from '../services/getAllFavs'

const Context = React.createContext({})

export function UserContextProvider ({ children }) {
  const [favs, setFav] = useState([])
  const [jwt, setJwt] = useState(
    () => window.sessionStorage.getItem('jwt')
  )
  useEffect(() => {
    if (!jwt) return setFav([])
    getAllFav({ jwt })
      .then(setFav)
  }, [jwt])

  return (
    <Context.Provider value={{ setFav, favs, jwt, setJwt }}>
      {children}
    </Context.Provider>
  )
}

export default Context
