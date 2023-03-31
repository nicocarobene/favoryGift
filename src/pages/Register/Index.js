import React from 'react'
import Register from '../../component/Register/Index'
import './style.css'
import { Helmet } from 'react-helmet'
export default function RegisterPage () {
  return (
    <>
      <Helmet>
        <title>Register | FavityGify</title>
      </Helmet>
      <div className='container__formik'>
        <h2>Register</h2>
        <Register />
      </div>
    </>
  )
}
