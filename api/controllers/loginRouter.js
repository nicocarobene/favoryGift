const loginRouter = require('express').Router()
const bcrypt = require('bcrypt')
const User = require('../Models/User')

loginRouter.post('/', async (req, resp) => {
  const { username, password } = req.body

  const user = await User.findOne({ username }).populate('favs', {
    likeId: 1,
    id: 1
  })

  const passwordCorrect = user === null
    ? false
    : await bcrypt.compare(password, user.passwordHash)

  if (!(user && passwordCorrect)) {
    resp.status(401).json({
      error: 'invalid user or password'
    })
  }
  resp.json({
    username: user.username,
    favs: user.favs,
    message: 'tuto ben'
  })
})
module.exports = loginRouter
