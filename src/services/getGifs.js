import { API_KEY, API_URL } from './setting'

export default function getGifs ({ meme, rating, page = 0 }) {
  const apiURL = `${API_URL}/gifs/search?api_key=${API_KEY}q&q=${meme}&limit=24&offset=${page * 10}&rating=${rating}&lang=en`

  return fetch(apiURL)
    .then(res => res.json())
    .then(json => {
      const { data = [] } = json
      const gifs = data.map(image => {
        const { id, title, images } = image
        const { url } = images.original
        return { title, url, id }
      })
      return gifs
    })
}
