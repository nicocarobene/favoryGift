import React from 'react'
import Login from '../../component/Login/Index'
import { Helmet } from 'react-helmet'

export default function LoginPage () {
  return (
    <>
      <Helmet>
        <title>Login | FavityGify</title>
      </Helmet>
      <Login />
    </>
  )
}
