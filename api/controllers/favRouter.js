const favRouter = require('express').Router()
const User = require('../Models/User')
const Fav = require('../Models/Fav')

favRouter.post('/:id', async (req, resp) => {
  const { id } = req.params
  const { username } = req
  console.log(id, username)
  const isAlreadyFav = await Fav.findOne({ likeId: id }).populate('users')
  const user = await User.findOne({ username }).populate('favs')
  const likeId = user.favs.map(like => like.likeId)

  if (!isAlreadyFav) {
    const newFav = new Fav({
      likeId: id,
      users: user._id
    })

    try {
      const saveFav = await newFav.save()
      user.favs = user.favs.concat(saveFav._id)
      await user.save()
      const newFavUser = await user.populate('favs')
      const likes = newFavUser.favs.map(fav => fav.likeId)
      return resp.status(200).json({ favs: likes })
    } catch (e) {
      console.log(e)
    }
  }

  const userAlreadyFav = isAlreadyFav.users.some(user => user.username === username)
  if (userAlreadyFav) {
    return resp.status(400).json({ error: 'the user have a like in this gif' })
  }
  isAlreadyFav.users = isAlreadyFav.users.concat(user._id)
  user.favs = user.favs.concat(isAlreadyFav._id)
  await isAlreadyFav.save()
  await user.save()
  const newFavUser = await user.populate('favs')
  const likes = newFavUser.favs.map(fav => fav.likeId)
  resp.status(200).json({ favs: likes })
})

module.exports = favRouter
