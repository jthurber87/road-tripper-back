const passport = require('passport')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const secret = process.env.JWT_SECRET || "custom secret string unique to app"

const { Strategy, ExtractJwt } = require('passport-jwt')

const options = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: secret
}

const User = require('../models/user')

const strategy = new Strategy(options, function(jwt_payload, done){
  console.log(jwt_payload)
  User.findById(jwt_payload.id).then(
    (user)=>done(null, user)
  ).catch(err=>done(err))
})

passport.use(strategy)
passport.initialize()

const requireToken = passport.authenticate('jwt', {session: false})

const createUserToken = (req, user) => {
  if( !user || !req.body.password || !bcrypt.compareSync(req.body.password, user.password)){
    const err = new Error("Provided username or password is incorrect")
    err.status = 422;
    throw err
  }
  return jwt.sign({id: user._id}, secret, {expiresIn: 36000})
}

module.exports = {
  requireToken,
  createUserToken
}
