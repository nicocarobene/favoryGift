/* eslint-disable react/jsx-closing-tag-location */
import React, { useState } from 'react'
import register from '../../services/register'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import './Register.css'

export default function Formulario () {
  const [registered, setRegistered] = useState(false)
  if (registered) {
    return (
      <h4>
        Congratulations: ✔️ You've been succefully registered!
      </h4>
    )
  }
  return (
    <>
      <Formik
        initialValues={{
          username: '',
          password: ''
        }}
        validate={(values) => {
          const errors = {}
          if (!values.username) {
            errors.username = 'Required username'
          }
          if (!values.password) {
            errors.password = 'Required password'
          } else if (values.password.length < 5) {
            errors.password = 'Lenght must be greter than 5'
          }

          return errors
        }}
        onSubmit={(values, { setFieldError }) => {
          return register(values)
            .then(setRegistered(true))
            .catch(() => setFieldError('username', 'This username is not valid'))
        }}
      >
        {
            ({ errors, isSubmitting }) => (
              <Form className='formik'>
                <i class='fa-solid fa-user' />
                <ErrorMessage name='username' component='h4' />
                <Field
                  className={errors.username ? 'error' : ''}
                  name='username' placeholder='Put here the username'
                />
                <i class='fa-solid fa-lock' />
                <ErrorMessage name='password' component='h4' />
                <Field
                  className={errors.password ? 'error' : ''}
                  name='password' placeholder='Put here the password'
                />
                <button disabled={isSubmitting}>Register</button>
                {console.log(errors)}
              </Form>
            )
        }

      </Formik>
    </>
  )
}
