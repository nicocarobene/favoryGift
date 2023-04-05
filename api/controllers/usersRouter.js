const usersRouter = require('express').Router()
const User = require('../Models/User')

usersRouter.post('/', (req, resp) => {
  const body = req
  const { username, name, password } = body

  console.log(username, name, password)
  const user = new User({
    username,
    name,
    passwordHash: password
  })

  user.save().then(savedUser => {
    resp.json(savedUser)
  })
})

module.exports = usersRouter
