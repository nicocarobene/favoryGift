const loginRouter = require('express').Router()
const bcrypt = require('bcrypt')
const User = require('../Models/User')

loginRouter.post('/',async(req,resp)=>{
    const { username, password } = req.body

    const user = await User.findOne({username})

    const passwordCorrect= user ===null 
            ? false
            : await bcrypt.compare(password, user.passwordHash)
     
    if (!(user && passwordCorrect)) {
      response.status(401).json({
      error: 'invalid user or password'
      })
    }
    resp.json({
        username: user.username,
        message: 'tuto ben'
    })

})
module.exports = loginRouter