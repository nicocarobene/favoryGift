import React from 'react'
import { Link } from 'wouter'
import './Gif.css'
import ButtonFav from './Fav/ButtonFav'

function Gif ({ id, title, url }) {
  return (
    <div className='Gif-container'>
      <Link to={`/gif/${id}`}>
        <div id={id} className='Gif'>
          <h4>{title}</h4>
          <img src={url} alt={title} />
        </div>
      </Link>
      <ButtonFav id={id} />
    </div>
  )
}

export default React.memo(Gif)
