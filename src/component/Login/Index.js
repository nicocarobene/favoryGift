import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'wouter'
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
        <div className='login-form-container'>
          <h2 className='login__log'>Log In</h2>
          <form className='login__form' onSubmit={handleSubmit}>
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
              <i class='fa-solid fa-user' />
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
              <i class='fa-solid fa-lock' />
            </label>
            <button className='login__btnLog'>Login</button>
          </form>
          <p>You don't have an account?</p>
          <Link to='/register'>Register</Link>
        </div>}
      {hasLoginError && <strong>Credentials are invalid</strong>}
    </>
  )
}
