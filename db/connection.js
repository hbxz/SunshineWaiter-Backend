const mongoose = require('mongoose')
const config = require('config')

const url = process.env.MONGO_URL || config.get('MONGO_URL')
const userName =
  process.env.MONGO_INITDB_ROOT_USERNAME ||
  config.get('MONGO_INITDB_ROOT_USERNAME')
const pwd =
  process.env.MONGO_INITDB_ROOT_PASSWORD ||
  config.get('MONGO_INITDB_ROOT_PASSWORD')

console.log('====================================')
console.log({ url, userName, pwd })
console.log('====================================')

if (!url || !userName || !pwd) {
  console.error(
    'FATAL ERROR: environment variable for mongoDB is not properly defined! '
  )
  process.exit(1)
}

const connectDb = () => {
  mongoose
    .connect(url, {
      useNewUrlParser: true,
      user: userName,
      pass: pwd,
    })
    .then(() => console.log('Connected to MongoDB'))
    .catch((err) => console.log(`Fail to connect to MongoDB: ${err}`))
}
module.exports = connectDb
