/* eslint-disable no-console */
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const webpack = require('webpack')
const webpackDevMiddleware = require('webpack-dev-middleware')
const webpackConfig = require('../../webpack.config')

const PORT = process.env.PORT || 3000


const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())

app.get('/', (req, res, next) => {
  next()
})

const compiler = webpack(webpackConfig)
app.use(webpackDevMiddleware(compiler, {
  publicPath: webpackConfig.output.publicPath,
}))

app.get('/testRoute', (req, res) => {
  res.status(201).json({ success: true })
})


app.listen(PORT, () => {
  console.log(`This server is now running on http://localhost:${PORT}`)
})
