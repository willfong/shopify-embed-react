import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, useHistory } from 'react-router-dom'
import enTranslations from '@shopify/polaris/locales/en.json'
import { AppProvider as PolarisAppProvider } from '@shopify/polaris'
import { Provider as AppBridgeProvider } from '@shopify/app-bridge-react'
import createApp from '@shopify/app-bridge'
import { getSessionToken } from '@shopify/app-bridge-utils'

import '@shopify/polaris/dist/styles.css'

import App from './App'
import { getMockClient } from './api'

interface Config {
  apiKey: string,
  host: string
}

function ConfigRouter () {
  const history = useHistory()
  const queryString = new URLSearchParams(history.location.search)
  const host = queryString.get('host') ?? ''

  const [sessionToken, setSessionToken] = useState('')
  const [client, setClient] = useState({ clientId: 0 })

  const config: Config = { apiKey: 'c94085f29d9ee338802c711f39860e73', host }

  const getShopifySessionToken = async (config: Config): Promise<void> => {
    const app = createApp(config)
    const sessionToken = await getSessionToken(app)
    console.log(sessionToken)
    setSessionToken(sessionToken)
  }

  const getClient = async (sessionToken: string): Promise<void> => {
    const clientData = await getMockClient(sessionToken)
    setClient(clientData)
  }

  useEffect(() => {
    getShopifySessionToken(config)
  }, [])

  useEffect(() => {
    if (sessionToken !== '') {
      getClient(sessionToken)
    }
  }, [sessionToken])

  if (host === '') {
    return <h1>This is a Shopify embedded app and should be loaded within Shopify</h1>
  }

  return (
    <AppBridgeProvider config={config}>
      <App client={client} />
    </AppBridgeProvider>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <PolarisAppProvider i18n={enTranslations}>
      <BrowserRouter>
        <ConfigRouter />
      </BrowserRouter>
    </PolarisAppProvider>
  </React.StrictMode>,
  document.getElementById('root')
)