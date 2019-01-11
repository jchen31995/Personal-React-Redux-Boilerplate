/* eslint-disable no-console */
import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import webpack from 'webpack'
import webpackDevMiddleware from 'webpack-dev-middleware'

import { PROJECT_NAME, PORT } from './config'
import devMiddleware from './middlewares/development'
import prodMiddleware from './middlewares/production'
import api from './routes/api'
import auth from './routes/auth'

const isDev = process.env.NODE_ENV !== 'production'
const webpackConfig = isDev ? require('../../webpack_config/webpack.dev') : require('../../webpack_config/webpack.prod')

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
  console.log(`${PROJECT_NAME} is now listening on PORT ${PORT}. Visit http://localhost:${PORT}!`)
})
