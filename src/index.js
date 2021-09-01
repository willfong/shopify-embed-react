import React, { useState, useEffect, useMemo } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, useHistory } from 'react-router-dom';
import enTranslations from '@shopify/polaris/locales/en.json';
import { AppProvider as PolarisAppProvider } from '@shopify/polaris';
import { Provider as AppBridgeProvider } from '@shopify/app-bridge-react';
import createApp from "@shopify/app-bridge";
import { getSessionToken } from "@shopify/app-bridge-utils";

import '@shopify/polaris/dist/styles.css';

import reportWebVitals from './reportWebVitals';
import App from './App';
import { mockGetClient } from './api';

const getShopifySessionToken = async (config) => {
  const app = createApp(config);
  const sessionToken = await getSessionToken(app);
  console.log(sessionToken);
  return sessionToken;
}

function ConfigRouter() {
  let history = useHistory();
  const queryString = new URLSearchParams(history.location.search);
  const host = queryString.get('host');

  const [client, setClient] = useState(null);

  const config = useMemo(() => ({ apiKey: 'c94085f29d9ee338802c711f39860e73', host}), [host]);

  useEffect(() => {
    mockGetClient(getShopifySessionToken(config)).then((data) => setClient(data))
  }, [config])

  if (!host) {
    return <h1>This is a Shopify embedded app and should be loaded within Shopify</h1>;
  }
  
  return ( 
    <AppBridgeProvider config={config}>
      <App client={client} />
    </AppBridgeProvider>
  );
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
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
