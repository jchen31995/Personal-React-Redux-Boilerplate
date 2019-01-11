import express from 'express'

const router = express.Router()

router.get('/api', (req, res) => {
  res.send('This is a sample route. Build on this!')
})

export default router
