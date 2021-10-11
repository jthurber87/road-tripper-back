require('dotenv').config()
const roadtripper = require('../controllers/roadTripper.js')
const express = require('express')
const app = express()
const cors = require('cors')
const PORT = process.env.PORT || 9001
const whitelist = ["http://localhost:3000", "https://roadtripper-ga.surge.sh", "https://roadtripper-back.herokuapp.com"];
const corsOptions = {
  origin: function(origin, callback) {
    if (whitelist.indexOf(origin) != -1 || !origin) {
      callback(null, true)
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  }
};

// middleware
app.use(cors(corsOptions));
app.use(express.json());
app.use('/trips', roadtripper)



app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`)
})
