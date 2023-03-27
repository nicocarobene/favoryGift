const ENDPOINT = 'http://localhost:3030/api/register'

export default function login ({ username, password }) {
  return (fetch(`${ENDPOINT}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ username, password })
  }).then(res => {
    if (!res.ok) throw new Error('Response is NOT ok')
    return true
  })
  )
}
