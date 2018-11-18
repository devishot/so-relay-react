import React from 'react';
import ReactDOM from 'react-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

import { App } from './modules/app';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <App>
  </App>
, document.getElementById('root'));
registerServiceWorker();
