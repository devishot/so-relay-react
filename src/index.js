import React from 'react';
import ReactDOM from 'react-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

import { App } from './modules/app';
import { SingleTimeRecord } from './modules/time_record';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <App>
    <SingleTimeRecord id="B58CC80A-1BF5-4652-9559-97AC6C6545AD" />
  </App>
, document.getElementById('root'));
registerServiceWorker();
