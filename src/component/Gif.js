import React from 'react'
import { Link } from 'wouter'
import './Gif.css'
import ButtonFav from './Fav/ButtonFav'

function Gif ({ gifD, id, title, url }) {
  return (
    <div className='Gif-container'>
      <Link to={`/gifD/${id}`}>
        <div id={id} className={gifD ? 'Gif Detail' : 'Gif'}>
          <h4 className='Gif__title'>{title}</h4>
          <img src={url} alt={title} />
        </div>
      </Link>
      <ButtonFav id={id} />
    </div>
  )
}

export default React.memo(Gif)
