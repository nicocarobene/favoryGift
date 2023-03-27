import { API_KEY, API_URL } from './setting'

export default function getTrendingTerms () {
  const apiURL = `${API_URL}/trending/searches?api_key=${API_KEY}q&limit=25&rating=g`

  return fetch(apiURL)
    .then(res => res.json())
    .then(json => {
      const { data = [] } = json
      return data
    })
}
