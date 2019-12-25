// Import
import React from 'react';
import ReactDOM from 'react-dom';

// Import - App
import App from './App';

// Import - Service Worker
import * as serviceWorker from './serviceWorker';

// ----------------------------------------------------------------------------------------- //

ReactDOM.render(<App />, document.getElementById('root'));

// Register Service Worker ( unregister to turn off )
serviceWorker.register();
