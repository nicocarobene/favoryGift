require('dotenv').config()
require('./mongo')

const express = require('express')
const cors = require('cors')

const usersRouter = require('./controllers/usersRouter')
const loginRouter = require('./controllers/loginRouter')
const favRouter = require('./controllers/favRouter')

// const User = require('./Models/User')
const Fav = require('./Models/Fav')

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

app.use('/api/newregister', usersRouter)
app.use('/api/login', loginRouter)

app.post('/api/register', (request, response) => {
  const { username, password } = request.body

  // Note.find({ username })
  //   .then(user => {
  //     if (userAlready) {
  //       response.status(400)
  //       response.json({ error: 'user is already Existe' })
  //     }
  //   })

  // const token = jwt.sign({ username, password }, SING)

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
  // favs = favs.concat(id)
  favs.push(id)

  response.status(200)
  response.send({ favs })
  response.end()
})

app.use('/addFav', favRouter)

app.get('/favs', (request, response) => {
  const jwt = request.headers.authorization
  console.log(jwt, user.token)

  if (jwt !== user.token) {
    response.status(400)
    response.json({ error: 'user is not finded' })
  }
  response.status(200)
  Fav.find({}).then(notes => {
    response.json({ notes })
    console.log(notes)
  })
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

const PORT = process.env.PORT || 3001

app.listen(PORT, () => {
  console.log(`Servers ranning in PORT: ${PORT}`)
})
