const express = require('express')
const env = require('dotenv')
const app = express()
const PORT = process.env.PORT || 9000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(PORT, () => {
  console.log(`Listening at http://localhost:${PORT}`)
})