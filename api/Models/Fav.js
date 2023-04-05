
const { Schema, model } = require('mongoose')

const favSchema = new Schema({
  likeId: {
    type: String,
    require: true,
    unique: true
  },
  users: [{
    type: Schema.Types.ObjectId,
    ref: 'User',
    unique: true
  }]
})

favSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id
    delete returnedObject._id
    delete returnedObject.__v
  }
})

const Fav = model('Fav', favSchema)

module.exports = Fav
