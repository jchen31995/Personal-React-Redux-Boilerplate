/* eslint-disable no-console */
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const isDev = process.env.NODE_ENV !== 'production'
const webpack = require('webpack')
const webpackDevMiddleware = require('webpack-dev-middleware')
const webpackConfig = isDev ? require('../../webpack_config/webpack.dev') : require('../../webpack_config/webpack.prod')

const { PROJECT_NAME, PORT } = require('./config')
const auth = require('./routes/auth')
const api = require('./routes/api')


const devMiddleware = require('./middlewares/development')
const prodMiddleware = require('./middlewares/production')

const setUpEnvRoutes = isDev ? devMiddleware : prodMiddleware

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

app.use(auth)
app.use(api)

app.use(setUpEnvRoutes)

app.listen(PORT, () => {
  console.log(`${PROJECT_NAME} is now running. Visit http://localhost:${PORT} on your preferred browser.`)
})
