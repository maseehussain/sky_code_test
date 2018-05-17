import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link } from 'react-router-dom';

import SkyData from './components/SkyData';

class App extends React.Component {

  render() {
    return (
      <main>
        <div className="container">
          <div className="row">
            <SkyData />
          </div>
        </div>
      </main>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
