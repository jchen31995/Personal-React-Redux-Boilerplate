import React from 'react'
import { Provider } from 'react-redux'
import { IntlProvider } from 'react-intl'

import configureStore from './store/configureStore'
import { locale, translatedMessages } from './localization/index'
import flattenMessages from './localization/utils'
import Router from './router'

const store = configureStore()

const App = () => (
  <Provider store={ store }>
    <IntlProvider locale={locale} messages={flattenMessages(translatedMessages)}>
      <Router/>
    </IntlProvider>
  </Provider>
)

export default App
