const express = require('express')
const router = express.Router()

/*
// If you decide to use passportJS //
const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy
const session = require('express-session');
*/

router.post('/register', (req, res) => {
  res.send('POST request to register')
})

router.post('/login', (req, res) => {
  res.send('POST request to create session & login')
})

router.delete('/logout', (req, res) => {
  res.send('DELETE request to clear session & logout')
})

module.exports = router;