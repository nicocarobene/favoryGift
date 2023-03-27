import React from 'react'
import { Helmet } from 'react-helmet'

import ListOfGifs from '../../component/ListOfGifs'
import UseGifs from '../../Hook/UseGifs'

export default function Home () {
  const { loading, gifs } = UseGifs()

  return (
    <>
      <Helmet>
        <title>Home | Giffy</title>
      </Helmet>
      <div className='container__gifs'>
        <h4 className=''>Your last seach meme</h4>
        {loading
          ? 'Loading Memes'
          : <ListOfGifs gifs={gifs} />}
      </div>
    </>
  )
}
