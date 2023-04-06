const loginRouter = require('express').Router()
const bcrypt = require('bcrypt')
const User = require('../Models/User')
const jwt = require('jsonwebtoken')

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
    return resp.status(401).json({
      error: 'invalid user or password'
    })
  }

  const userForToken = {
    id: user._id,
    username: user.username
  }
  const token = jwt.sign(
    userForToken,
    process.env.SING,
    {
      expiresIn: 60 * 60 * 24 * 7
    })

  resp.status(200).json({
    username: user.username,
    name: user.name,
    favs: user.favs,
    token,
    message: 'tuto ben'
  })
})
module.exports = loginRouter
