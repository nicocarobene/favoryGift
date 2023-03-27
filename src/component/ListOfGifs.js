import React from 'react'
import Gif from './Gif'
import './ListOfGifs.css'

export default function ListOfGifs ({ gifs }) {
  return (
    <>
      <div className='Gifs__container'>
        {Array.isArray(gifs)
          ? gifs.map(({ id, url, title }) => {
            return <Gif key={id} id={id} title={title} url={url} />
          })
          : 'no hay imagenes disponibles'}
      </div>
    </>
  )
}
