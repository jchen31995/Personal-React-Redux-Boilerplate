const express = require('express')
const router = express.Router()

router.get('/api', (req, res) => {
  res.send('This is a sample route. Build on this!')
})

module.exports = router;