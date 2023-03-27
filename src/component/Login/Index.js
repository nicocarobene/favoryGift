import React, { useEffect, useState } from 'react'
import { useLocation } from 'wouter'
import useUser from '../../Hook/useUser'
import './Login.css'

export default function Login ({ onLogin }) {
  const [username, setUsername] = useState()
  const [password, setPassword] = useState()

  const { isLoginLoading, hasLoginError, login, isLogged } = useUser()

  const [, navigate] = useLocation()

  useEffect(() => {
    if (isLogged) {
      navigate('/')
      onLogin && onLogin()
    }
  }, [isLogged, navigate, onLogin])

  const handleSubmit = (e) => {
    e.preventDefault()
    login({ username, password })
  }

  if (isLoginLoading) return

  return (
    <>
      {isLoginLoading && <strong>Checking credentials...</strong>}
      {!isLoginLoading &&
        <form className='form' onSubmit={handleSubmit}>
          <label>
            Username
            <input
              type='text'
              placeholder='Username'
              value={username}
              onChange={(e) => {
                setUsername(e.target.value)
              }}
            />
          </label>
          <label>
            Password
            <input
              type='password'
              placeholder='password'
              value={password}
              onChange={(e) => {
                setPassword(e.target.value)
              }}
            />
          </label>
          <button className='btnLog'>Login</button>
        </form>}
      {hasLoginError && <strong>Credentials are invalid</strong>}
    </>
  )
}
