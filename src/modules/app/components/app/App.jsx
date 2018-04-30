import * as React from 'react';
import './app.css';

import { Layout } from '../layout';
import { Header } from '../header';

export class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Layout 
          header={ 
            <Header />
          } 
          right={ this.props.children } />
      </div>
    );
  }
}
