require('dotenv').config()
const mongoose = require('mongoose')
const DB_URL = 'mongodb+srv://jthurber87:Cheetoh87!@cluster0.u3c9b.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'

//Error/DC
mongoose.connection.on('error', err => console.log(err.message + ' is Mongod not running?'))
mongoose.connection.on('disconnected', () => console.log('mongo disconnected'))


mongoose.connect(DB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

mongoose.connection.once('open', ()=>{
  console.log('connected to mongoose!')
})
