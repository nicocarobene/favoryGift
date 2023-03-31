import React from 'react'
import { Link, useRoute } from 'wouter'
import './index.css'
import useUser from '../../Hook/useUser'

export default function Header () {
  const { isLogged, logout } = useUser()
  const [match] = useRoute('/login')

  const handleClick = e => {
    e.preventDefault()
    logout()
  }

  const content = match
    ? <Link to='/register'>Register</Link>
    : isLogged
      ? <Link to='' onClick={handleClick}>Logout</Link>
      : (
        <>
          <Link to='/register'>Register</Link>
          <Link to='/login'>Login</Link>
        </>
        )

  return (
    <header className='gf-header'>
      {content}
    </header>
  )
}
