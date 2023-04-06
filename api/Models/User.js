const { Schema, model } = require('mongoose')

const userSchema = new Schema({
  username: {
    type: String,
    require: true,
    unique: true
  },
  name: {
    type: String,
    require: true
  },
  passwordHash: {
    type: String,
    require: true
  },
  favs: [{
    type: Schema.Types.ObjectId,
    ref: 'Fav'
  }]
})

userSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id
    delete returnedObject._id
    delete returnedObject.__v
    delete returnedObject.passwordHash
  }
}
)

const User = model('User', userSchema)

module.exports = User
