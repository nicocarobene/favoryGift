const ENDPOINT = '/api/register'

export default function login ({ username, name, password }) {
  return (fetch(`${ENDPOINT}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ username, name, password })
  }).then(res => {
    if (!res.ok) throw new Error('Response is NOT ok')
    return true
  })
  )
}
