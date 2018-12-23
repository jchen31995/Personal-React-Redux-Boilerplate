module.exports = {
    "env": {
      "browser": true,
      "es6": true,
      "jest": true,
      "node": true
    },
    "extends": [
      "eslint-config-airbnb-base",
      "plugin:react/recommended"
    ],
    "globals": {
      "afterAll": true,
      "afterEach": true,
      "beforeAll": true,
      "beforeEach": true,
      "describe": true,
      "env": true,
      "render": true,
      "shallow": true
    },
    "parser": "babel-eslint",
    "parserOptions": {
      "sourceType": "module",
      "ecmaFeatures": {
        "jsx": true
      }
    },
    "plugins": [
      "jsx-a11y",
      "react"
    ],
    "rules": {
      "react/jsx-uses-vars": [2],
      "jsx-quotes": ["error", "prefer-double"],
      "semi": ["error", "never"]
    },
    "settings": {
      "import/resolver": {
        "webpack": {
          "config": "./webpack.config.js"
        }
      },
      "react": {
        "version": "16.3"
      }
    }
  }
