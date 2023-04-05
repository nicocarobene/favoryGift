const RemoveFavRouter = require('express').Router()
const User = require('../Models/User')
const Fav = require('../Models/Fav')

RemoveFavRouter.delete('/', async (req,res)=>{
    const { id } = req.body
    const username = 'Nicolascarobene'

    const user = await User.findOne({ username }).populate('favs')
    const fav = await Fav.findOne({likeId: id}).populate('users')

    console.log(fav)

    user.favs = user.favs.filter(like=> like.likeId !== id)
    fav.users = fav.users.filter(user=>user.username !== username )
    
    await user.save()
    await fav.save()
    console.log(user, fav)
    res.json('delete was succefull').status(200)
    
})
module.exports = RemoveFavRouter