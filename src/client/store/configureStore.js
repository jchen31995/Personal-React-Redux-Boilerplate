import devStore from './store.dev'
import prodStore from './store.prod'

const isDev = process.NODE_ENV !== 'production'

if (isDev) {
  module.exports = devStore
} else {
  module.exports = prodStore
}
