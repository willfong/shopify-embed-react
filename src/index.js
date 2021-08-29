import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import '@shopify/polaris/dist/styles.css';
import enTranslations from '@shopify/polaris/locales/en.json';
import {AppProvider} from '@shopify/polaris';
import {Provider, Loading} from '@shopify/app-bridge-react';

const config = {apiKey: '856c68dd4d82ce02b52f0cd5f0f4132b', host: 'd2lsbGYtc2hvcC5teXNob3BpZnkuY29tL2FkbWlu'};

ReactDOM.render(
  <React.StrictMode>
    <AppProvider i18n={enTranslations}>
      <Provider config={config}>
        <Loading />
        <App />
      </Provider>
    </AppProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
