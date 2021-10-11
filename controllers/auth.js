const express = require('express')
const User = require('../models/user')
const bcrypt = require('bcrypt')
const { createUserToken } = require('../middleware/auth')
const router = express.Router()
// REGISTER
// POST - ('/auth/register')
const register = async (req, res) => {
  try {
    const salt = await bcrypt.genSalt(10);
    const passwordHash = await bcrypt.hash(req.body.password, salt)
    //override req.body.password w passwordHash
    //create new user w hashed password
    req.body.password = passwordHash
    console.log(req.body.password)
    const newUser = await User.create(req.body)

    console.log(newUser)
    res.status(201).json({
      currentUser: newUser,
      isLoggedIn: true
    })
  } catch(err){
    res.status(400).json({error: err.message})
    console.log(err)
  }
}

// LOGIN
// POST - ('/auth/login')
const login = async (req, res) => {
  try{
    const loggingUser = req.body.username
    const foundUser = await User.findOne({username: loggingUser})
    const token = await createUserToken(req, foundUser)
    console.log(token)
    res.status(200).json({
      user: foundUser,
      isLoggedIn: true,
      token: token
    })
  } catch(err){
    res.status(401).json({error: err.message})
  }
}

// LOGOUT
// GET - ('/auth/logout')
const logout = async (req, res) => {
  res.send("Post logout")
}

router.post('/register', register)
router.post('/login', login)
router.get('/logout', logout)

module.exports = router
