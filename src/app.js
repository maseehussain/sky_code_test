import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link } from 'react-router-dom';

import SkyData from './components/SkyData';
import SkyAssets from './components/SkyAssets';

import 'bootstrap-css-only';
import './scss/style.scss';

class App extends React.Component {

  render() {
    return (
      <main>
        <div className="container">
          <SkyAssets />
        </div>
      </main>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
