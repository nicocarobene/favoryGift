import { API_KEY, API_URL } from './setting'

export default function GetMyLikes (favs) {
  const string = favs.join(',')
  const apiURL = `${API_URL}/gifs?api_key=${API_KEY}q&ids=${string}`
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
