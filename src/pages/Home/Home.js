import React from 'react'
import { Helmet } from 'react-helmet'

import ListOfGifs from '../../component/ListOfGifs'
import UseGifs from '../../Hook/UseGifs'
import './style.css'

export default function Home () {
  const { loading, gifs } = UseGifs()

  return (
    <>
      <Helmet>
        <title>Home | FavorityGify</title>
      </Helmet>
      <div className='container__gifs'>
        <h4 className='Last__search'>Your last seach meme</h4>
        {loading
          ? 'Loading Memes'
          : <ListOfGifs gifs={gifs} />}
      </div>
    </>
  )
}
