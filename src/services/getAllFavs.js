const ENDPOINT = 'http://localhost:3030'

export default function getAllFav ({ jwt }) {
  return fetch(`${ENDPOINT}/favs`, {
    method: 'GET',
    headers: {
      Authorization: jwt,
      'Content-type': 'application/json'
    }
  }).then(res => {
    if (!res.ok) throw new Error('Response in NOT ok')
    return res.json()
  })
    .then(json => {
      const { favs } = json
      return favs
    })
}
