const ENDPOINT = 'http://localhost:3030'

export default function addFav ({ id, jwt }) {
  return fetch(`${ENDPOINT}/favs/${id}`, {
    method: 'POST',
    headers: { Authorization: `Bearer ${jwt}` }
  }).then(res => {
    if (!res.ok) throw new Error('Response in NOT ok')
    return res.json()
  })
    .then(json => {
      const { favs } = json
      return favs
    })
}
