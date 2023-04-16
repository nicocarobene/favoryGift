require('dotenv').config()
require('./mongo')

const express = require('express')
const cors = require('cors')

const userExtractor = require('./MiddleWare/userExtractor')

const usersRouter = require('./controllers/usersRouter')
const loginRouter = require('./controllers/loginRouter')
const favRouter = require('./controllers/favRouter')
const RemoveFavRouter = require('./controllers/RemoveFavRouter')

const User = require('./Models/User')

const app = express()
app.use(express.json())
app.use(cors())
app.use(express.static('./build'))
app.use('/api/register', usersRouter)
app.use('/api/users', loginRouter)
app.use('/favs', userExtractor, favRouter)
app.use('/favs', userExtractor, RemoveFavRouter)

app.get('/fav', userExtractor, async (req, resp) => {
  const { username } = req
  const user = await User.findOne({ username }).populate('favs')
  const favs = user.favs.map(like => like.likeId)
  if (!user) {
    return resp.status(400).json({ error: 'username or password was wrong' })
  }
  resp.status(200).json({ res: favs })
})

// app.post('/api/users', (request, response) => {
//   const { username, password } = request.body
//   user = users.find(user => user.username === username)

//   if (!user || password !== user.password) {
//     response.json({ error: 'los datos introducidos son incorrector por favor verifiquelos' })
//     response.status(404)
//   } else {
//     response.status(200)
//     response.json({ token: user.token })
//     response.end()
//   }
// })
// app.post('/api/register', (request, response) => {
//   const { username, password } = request.body
//   const userExist = users.some(user => user.username === username)
//   console.log(userExist)
//   if (userExist) {
//     response.status(400)
//     response.json({ error: 'user is already Existe' })
//   }
//   const token = jwt.sign({ username, password }, SING)
//   const newUser = {
//     username,
//     password,
//     token
//   }
//   users.push(newUser)
//   console.log(users)
//   response.status(200)
//   response.json(users)
//   response.end()
// })

// app.post('/favs/:id', (request, response) => {
//   const { id } = request.params
//   const { jwt } = request.body
//   console.log(user.token, jwt)

//   if (jwt !== user.token) {
//     response.status(400)
//     response.json({ error: 'user is not finded' })
//   }
//   // favs = favs.concat(id)
//   favs.push(id)

//   response.status(200)
//   response.send({ favs })
//   response.end()
// })

// app.get('/favs', (request, response) => {
//   const jwt = request.headers.authorization
//   console.log(jwt, user.token)

//   if (jwt !== user.token) {
//     response.status(400)
//     response.json({ error: 'user is not finded' })
//   }
//   response.status(200)
// })

// app.delete('/favs/:id', (request, response) => {
//   const { id } = request.params
//   const { jwt } = request.body
//   if (jwt !== user.token) {
//     response.status(400)
//     response.json({ error: 'user is not finded' })
//   }
//   favs = favs.filter(fav => fav !== id)
//   console.log(favs)
//   response.status(200)
//   response.send({ favs })
//   response.end()
// })

const PORT = process.env.PORT || 3001

app.listen(PORT, () => {
  console.log(`Servers ranning in PORT: ${PORT}`)
})
