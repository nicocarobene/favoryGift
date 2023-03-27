const express = require('express')
const cors = require('cors')
const jwt = require('jsonwebtoken')

const SING = 'SECRET WORD'

const users = []

let user
let favs = []

const app = express()
app.use(express.json())
app.use(cors())

app.post('/api/users', (request, response) => {
  const { username, password } = request.body
  user = users.find(user => user.username === username)

  if (!user || password !== user.password) {
    response.json({ error: 'los datos introducidos son incorrector por favor verifiquelos' })
    response.status(404)
  } else {
    response.status(200)
    response.json({ token: user.token })
    response.end()
  }
})

app.post('/api/register', (request, response) => {
  const { username, password } = request.body
  const userExist = users.some(user => user.username === username)
  console.log(userExist)
  if (userExist) {
    response.status(400)
    response.json({ error: 'user is already Existe' })
  }
  const token = jwt.sign({ username, password }, SING)
  const newUser = {
    username,
    password,
    token
  }
  users.push(newUser)
  console.log(users)
  response.status(200)
  response.json(users)
  response.end()
})

app.post('/favs/:id', (request, response) => {
  const { id } = request.params
  const { jwt } = request.body
  console.log(user.token, jwt)

  if (jwt !== user.token) {
    response.status(400)
    response.json({ error: 'user is not finded' })
  }

  favs.push(id)
  console.log(favs)
  response.status(200)
  response.send({ favs })
  response.end()
})

app.get('/favs', (request, response) => {
  const jwt = request.headers.authorization
  console.log(jwt, user.token)
  if (jwt !== user.token) {
    response.status(400)
    response.json({ error: 'user is not finded' })
  }
  response.status(200)
  response.json({ favs })
})

app.delete('/favs/:id', (request, response) => {
  const { id } = request.params
  const { jwt } = request.body
  if (jwt !== user.token) {
    response.status(400)
    response.json({ error: 'user is not finded' })
  }
  favs = favs.filter(fav => fav !== id)
  console.log(favs)
  response.status(200)
  response.send({ favs })
  response.end()
})

const PORT = 3030

app.listen(PORT, () => {
  console.log(`Servers ranning in PORT: ${PORT}`)
})
