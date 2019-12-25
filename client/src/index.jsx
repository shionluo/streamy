// Import
import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';

// Import - Store
import { store } from 'redux/store';

// Import - App
import App from './App';

// Import - Service Worker
import * as serviceWorker from './serviceWorker';

// ----------------------------------------------------------------------------------------- //

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);

// Register Service Worker ( unregister to turn off )
serviceWorker.register();
