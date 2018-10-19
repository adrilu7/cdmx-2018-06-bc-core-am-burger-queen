//import 'bootstrap/dist/css/bootstrap.min.css';
//import $ from 'jquery';
//import Pooper from 'popper.js';
//import 'bootstrap/dist/js/bootstrap.bundle.min';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './Routers/App';
import 'semantic-ui-css/semantic.min.css';

import './index.css';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
serviceWorker.unregister();
