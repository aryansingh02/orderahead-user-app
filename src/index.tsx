import React from 'react';
import { ThemeProvider } from '@material-ui/core';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import ReactGA from 'react-ga';
import { createBrowserHistory, History } from 'history';
import * as Sentry from '@sentry/react';
import { PersistGate } from 'redux-persist/lib/integration/react';
import reportWebVitals from './reportWebVitals';
import App from './App';
import config from './config';
import { theme } from './theme';
import { persistor, store } from './store';

const trackingId = 'G-E46B6LJLSZ'; // Replace with your Google Analytics tracking ID
Sentry.init({ dsn: config.SENTRY_URL });

ReactGA.initialize(trackingId);
ReactGA.set({
  // any data that is relevant to the user session
  // that you would like to track with google analytics
});
const history: History = createBrowserHistory();
/* eslint-disable  @typescript-eslint/no-explicit-any */
history.listen((location: any) => {
  ReactGA.set({ page: location.pathname }); // Update the user's current page
  ReactGA.pageview(location.pathname); // Record a pageview for the given page
});

const render = () => {
  ReactDOM.render(
    <React.StrictMode>
      <Sentry.ErrorBoundary fallback="An error has occurred">
        <PersistGate persistor={persistor} loading={<div />}>
          <ThemeProvider theme={theme}>
            <Provider store={store}>
              {/* @ts-ignore */}
              <App />
            </Provider>
          </ThemeProvider>
        </PersistGate>
      </Sentry.ErrorBoundary>
    </React.StrictMode>,
    document.getElementById('root')
  );
};
render();
// @ts-ignore
if (process.env.NODE_ENV === 'development' && module.hot) {
  // @ts-ignore
  module.hot.accept('./App', render);
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
