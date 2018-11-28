import React from 'react';
import ReactDOM from 'react-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-table/react-table.css';
import './index.css';

import { App } from './modules/app';
import { ClientPage } from './modules/client/queries';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <App>
    <ClientPage />
  </App>
, document.getElementById('root'));
registerServiceWorker();
