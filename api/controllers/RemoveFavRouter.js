const RemoveFavRouter = require('express').Router()
const User = require('../Models/User')
const Fav = require('../Models/Fav')

RemoveFavRouter.delete('/:id', async (req, res) => {
  const { id } = req.params
  const { username } = req

  const user = await User.findOne({ username }).populate('favs')
  const fav = await Fav.findOne({ likeId: id }).populate('users')

  const haveLike = user.favs.some(like => like.likeId === id)
  if (!haveLike) {
    return res.status(400).json({ error: 'the username or fav not exist already' })
  }
  user.favs = user.favs.filter(like => like.likeId !== id)
  fav.users = fav.users.filter(user => user.username !== username)

  await user.save()
  await fav.save()
  console.log(user, fav)
  res.status(200).json('delete was succefull')
})
module.exports = RemoveFavRouter
