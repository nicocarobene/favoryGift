// const ENDPOINT = 'http://localhost:3030'

export default function getAllFav ({ jwt }) {
  return fetch('/fav', {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${jwt}`
    }
  }).then(res => {
    if (!res.ok) throw new Error('Response in NOT ok')
    return res.json()
  })
    .then(json => {
      const { res } = json
      return res
    })
}
