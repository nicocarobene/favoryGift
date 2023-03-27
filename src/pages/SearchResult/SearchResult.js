import debounce from 'just-debounce-it'
import React, { useCallback, useEffect, useRef } from 'react'
import { Helmet } from 'react-helmet'
import ListOfGifs from '../../component/ListOfGifs'
import UseGifs from '../../Hook/UseGifs'
import useNearScreen from '../../Hook/useNearScreen'
import SearchForm from '../../component/searchForm'

export default function SearchResult ({ params }) {
  const { meme, rating = 'g' } = params
  const { loading, gifs, setPage } = UseGifs({ meme, rating })

  const externalRef = useRef()
  const { isNearScreen } = useNearScreen({ externalRef: loading ? null : externalRef, once: false })

  // const browserTitle  = meme ? meme : 'Loading'
  // useTitle({title:`Results of: ${browserTitle}`})

  // const handleNextPage=()=>setPage(prevPag=> prevPag + 1)
  // este es para el boton de siguiente pagina

  const debounceHandleNextPage = useCallback(
    debounce(
      () => setPage(prevPage => prevPage + 1), 200
    ), [setPage])

  useEffect(() => {
    if (isNearScreen)debounceHandleNextPage()
  }, [debounceHandleNextPage, isNearScreen])

  return (
    <>
      <div>
        {loading
          ? (
              'Cargando Memes'
            )
          : (
            <>
              <Helmet>
                <title>{decodeURI(meme)}</title>
                <meta name='description' content={`Result of: ${decodeURI(meme)}`} />
              </Helmet>
              <SearchForm initialKeyword={decodeURI(meme)} initialRating={rating} />
              <h3>List of Meme of: {decodeURI(meme).toUpperCase()}</h3>
              <ListOfGifs gifs={gifs} />
              <div id='visor' ref={externalRef} />
            </>
            )}
      </div>
    </>
  )
}
