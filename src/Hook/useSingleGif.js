import { useEffect, useState } from 'react'
import getSingleGif from '../services/getSingleGif'
import UseGifs from './UseGifs'

export default function useSingleGif ({ id }) {
  const { gifs } = UseGifs()
  const gifFromCache = gifs.find(gif => gif.id === id)

  const [gif, setGif] = useState(gifFromCache)
  const [isLoading, setLoading] = useState(false)
  const [isError, setIsError] = useState(false)

  useEffect(() => {
    if (!gif) {
      setLoading(true)
      // petision si no existe en cache
      getSingleGif({ id })
        .then(gif => {
          setGif(gif)
          setLoading(false)
          setIsError(false)
        }).catch(e => {
          setLoading(false)
          setIsError(true)
        })
    }
  }, [gif, id])

  return { gif, isLoading, isError }
}
