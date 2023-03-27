import { useContext } from 'react'
import GifsContext from '../Context/GifsContext'

export default function useGlobalGifs () {
  const { gifs } = useContext(GifsContext)
  return gifs
}
