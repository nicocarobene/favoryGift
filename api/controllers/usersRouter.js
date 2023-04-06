const bcrypt = require('bcrypt')
const usersRouter = require('express').Router()
const User = require('../Models/User')

usersRouter.post('/', async (req, resp) => {
  const { username, name, password } = req.body

  if (!(username && name && password)) {
    return resp.json({ error: 'the user required a username, name and password, pleas fill de input required' })
  }
  const isAlreadyuser = await User.findOne({ username })
  if (isAlreadyuser) {
    return resp.status(400).json({ error: 'user is already exist' })
  }
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
