const dotEnvSafe = require('dotenv-safe')
const path = require('path')

dotEnvSafe.config({
  allowEmptyValues: false,
  path: path.resolve(__dirname, '..', '../', '.env'),
  example: path.resolve(__dirname, '..', '..', '.env-example'),
})

const { PROJECT_NAME } = process.env
const PORT = process.env.PORT || 3000

module.exports = {
  PORT,
  PROJECT_NAME,
}
