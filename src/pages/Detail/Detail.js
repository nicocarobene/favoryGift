import React from 'react'
import { Redirect } from 'wouter'
import Gif from '../../component/Gif'
// import useGlobalGifs from "../../Hook/useGlobalGifs";
import useSingleGif from '../../Hook/useSingleGif'
// import useTitle from '../../Hook/useSEO'
import { Helmet } from 'react-helmet'

export default function Detail ({ params }) {
  const { id, gifD } = params
  const { gif, isLoading, isError } = useSingleGif({ id })

  if (isLoading) {
    return (
      <>
        <Helmet>
          <title>Cargando...</title>
        </Helmet>
        <h1>Aguantame un momnetito papa</h1>
      </>
    )
  }

  // const title= gif? gif.title : ''
  // useTitle({description: `Details of ${title}`, title})

  if (isError) return <Redirect to='404' />
  if (!gif) return null

  // const gifs = useGlobalGifs()
  // const gif = gifs.find((singleGif) => singleGif.id === id);

  return (
    <>
      <Helmet>
        <title>{gif.title} | FavorityGify</title>
      </Helmet>
      <Gif gifD={gifD} title={gif.title} url={gif.url} id={id} />
    </>
  )
}
