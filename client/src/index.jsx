// Import
import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

import * as serviceWorker from './serviceWorker';

// ----------------------------------------------------------------------------------------- //

ReactDOM.render(<App />, document.getElementById('root'));

// Register Service Worker ( unregister to turn off )
serviceWorker.register();
