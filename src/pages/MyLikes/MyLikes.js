import React, { useEffect, useState } from 'react'
import useUser from '../../Hook/useUser'
import { Helmet } from 'react-helmet'
import UseGifs from '../../Hook/UseGifs'
import ListOfGifs from '../../component/ListOfGifs'
import GetMyLikes from '../../services/getMyLikes'

export default function MyLikes () {
  const { favs } = useUser()
  const { loading } = UseGifs()
  const [gifs, setGifs] = useState({})
  useEffect(() => {
    GetMyLikes(favs).then(gifs => {
      setGifs(gifs)
    })
  }, [])
  console.log(gifs.length)
  return (
    <>
      <Helmet>
        <title>My Likes | FavorityGify</title>
      </Helmet>
      <div className='container__gifs'>
        <h4 className='Last__search'>Your Likes: </h4>
        {loading
          ? 'Loading Memes'
          : gifs.length === 0
            ? <h4>Yo don't have like already</h4>
            : <ListOfGifs gifs={gifs} />}
      </div>
    </>
  )
}
