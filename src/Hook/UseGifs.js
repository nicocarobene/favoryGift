import { useContext, useState, useEffect } from 'react'
import getGifs from '../services/getGifs'
import GifsContext from '../Context/GifsContext'

const INITIAL_PAGE = 0

const UseGifs = ({ meme, rating } = { meme: null, rating: 'g' }) => {
  const [loading, setLoading] = useState(false)
  const [lodingNextPage, setLoadingNextPage] = useState(false)
  const { gifs, setGifs } = useContext(GifsContext)
  const [page, setPage] = useState(INITIAL_PAGE)

  const memeToUse = meme || window.localStorage.getItem('lastMeme')

  useEffect(() => {
    setLoading(true)

    getGifs({ meme: memeToUse, rating })
      .then((res) => {
        setGifs(res)
        setLoading(false)
        window.localStorage.setItem('lastMeme', memeToUse)
      })
  }, [meme, rating, setGifs])

  useEffect(() => {
    if (page === INITIAL_PAGE) return
    setLoadingNextPage(true)
    getGifs({ meme: memeToUse, rating, page })
      .then(nextGifs => {
        setGifs(prevGifs => [...prevGifs, ...nextGifs])
        setLoadingNextPage(false)
      })
  }, [memeToUse, rating, page])

  return { loading, lodingNextPage, gifs, setPage }
}

export default UseGifs
