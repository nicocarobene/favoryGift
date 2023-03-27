import { useCallback, useContext, useState } from 'react'
import Context from '../Context/UserContext'
import LoginService from '../services/login'
import addFavService from '../services/addFav'
import deleteFavServices from '../services/deleteFav'

export default function useUser () {
  const { setFav, favs, jwt, setJwt } = useContext(Context)
  const [state, setState] = useState({ loading: false, error: false })

  const login = useCallback(({ username, password }) => {
    setState({ loading: true, error: false })
    LoginService({ username, password })
      .then(jwt => {
        setState({ loading: false, error: false })
        window.sessionStorage.setItem('jwt', jwt)
        setJwt(jwt)
      }).catch(e => {
        setState({ loading: false, error: true })
        window.sessionStorage.removeItem('jwt')
        console.log(e)
      })
  }, [setJwt])

  const addFav = useCallback(({ id }) => {
    addFavService({ id, jwt })
      .then(setFav)
      .catch(e => console.log(e))
  }, [jwt, setFav])

  const deleteFav = useCallback(({ id }) => {
    deleteFavServices({ id, jwt })
      .then(setFav)
      .catch(e => console.log(e))
  }, [jwt, setFav])

  const logout = useCallback(() => {
    window.sessionStorage.removeItem('jwt')
    setJwt(null)
  }, [setJwt])

  return {
    deleteFav,
    favs,
    addFav,
    isLogged: Boolean(jwt),
    isLoginLoading: state.loading,
    hasLoginError: state.error,
    login,
    logout
  }
}
