const dotEnvSafe = require('dotenv-safe')
const path = require('path')

dotEnvSafe.config({
  allowEmptyValues: true,
  path: path.resolve(__dirname, '..', '../', '.env'),
  example: path.resolve(__dirname, '..', '..', '.env-example'),
})

const { AUTH_SECRET, PROJECT_NAME } = process.env
const PORT = process.env.PORT || 3000

module.exports = {
  AUTH_SECRET,
  PORT,
  PROJECT_NAME,
}
