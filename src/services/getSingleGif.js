import { API_KEY, API_URL } from './setting'

const fromApiResponseToGif = apiRes => {
  const { data = [] } = apiRes
  const { id, title, images } = data
  const { url } = images.original
  return { title, url, id }
}

export default function getSingleGif ({ id }) {
  return fetch(`${API_URL}/gifs/${id}?api_key=${API_KEY}q`)
    .then(resp => resp.json())
    .then(fromApiResponseToGif)
}
