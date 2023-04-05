const favRouter = require('express').Router()
const User = require('../Models/User')
const Fav = require('../Models/Fav')

favRouter.post('/', async (req, resp) => {
  const { id } = req.body
  const username = 'Nicolascarobene'

  const user = await User.findOne({ username }).populate('favs')
  //   const isAlreadyFav = await Fav.find()
  //   console.log(isAlreadyFav)
  //   console.log(user)
  const newFav = new Fav({
    likeId: id,
    users: user._id
  })

  try {
    const saveFav = await newFav.save()
    user.favs = user.favs.concat(saveFav._id)
    await user.save()
    resp.json(newFav).status(200)
  } catch (e) {
    console.log(e)
  }
})

module.exports = favRouter
