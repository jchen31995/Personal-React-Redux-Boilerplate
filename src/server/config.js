import dotEnvSafe from 'dotenv-safe'
import path from 'path'

dotEnvSafe.config({
  allowEmptyValues: true,
  path: path.resolve(__dirname, '..', '../', '.env'),
  example: path.resolve(__dirname, '..', '..', '.env-example'),
})

const { PROJECT_NAME } = process.env
const PORT = process.env.PORT || 3000

export {
  PORT,
  PROJECT_NAME,
}
