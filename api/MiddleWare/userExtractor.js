const jwt = require('jsonwebtoken')

module.exports = (req, res, next) => {
  const { authorization } = req.headers
  let token = null
  if (authorization && authorization.toLowerCase().startsWith('bearer')) {
    token = authorization.substring(7)
  }
  const decodedToken = jwt.verify(token, process.env.SING)

  if (!token || !decodedToken.id) {
    return res.status(401).json({ error: 'somesing is wrong' })
  }

  req.username = decodedToken.username

  next()
}
