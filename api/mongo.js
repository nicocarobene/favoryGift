const mongoose = require('mongoose')

mongoose.connect(process.env.MONGO_DB_URI, {
  useUnifiedTopology: true
}).then(() => {
  console.log('Database connected')
}).catch(err => {
  console.error(err)
})

// process.on('uncaughtException', error => {
//   console.error(error)
//   mongoose.disconnect()
// })
