const bcrypt = require('bcrypt')
const usersRouter = require('express').Router()
const User = require('../Models/User')

usersRouter.post('/', async (req, resp) => {
  const { username, name, password } = req.body

  const passwordHash = await bcrypt.hash(password, 10)

  const user = new User({
    username,
    name,
    passwordHash
  })

  user.save().then(savedUser => {
    resp.json(savedUser)
  }).catch(e => {
    console.log(e)
  })
})

module.exports = usersRouter
