import React from 'react';
import ReactDOM from 'react-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

import { App } from './modules/app';
import { TimeRecordTable } from './modules/time_record';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <App>
    <TimeRecordTable />
  </App>
, document.getElementById('root'));
registerServiceWorker();
