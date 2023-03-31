import React from 'react'
import styled from 'styled-components'
import { Link } from 'wouter'
import { Helmet } from 'react-helmet'

export default function Error404 () {
  const LinkStyled = styled(Link)`
  border: 1px solid transparent;
  padding: .5rem 1rem;
  background-color: #8d19ff;
  color: #f8bafc;
  cursor: pointer;
  font-size: 1rem;
  :hover {
    background-color: transparent
  }
`

  return (
    <>
      <Helmet>
        <title>Error 404 | FavorityGify </title>
      </Helmet>
      <br />
      <h1>Error404</h1>
      <div className='App-wrapper'>
        <div className='papa'>
          <span className='code-error'> 404 </span>
          <span className='msg-error'>Sometimes gettings lost isn't that bad </span>
          <img className='gif-error' src='https://media0.giphy.com/media/8vUEXZA2me7vnuUvrs/giphy.gif?cid=04f488ebflsdz47tl68vwgs6pfs5hlm2vjwih4nwyniqvhkl&rid=giphy.gif&ct=g' />
        </div>
      </div>
      <LinkStyled to='/'>Come Back at home</LinkStyled>
    </>
  )
}
