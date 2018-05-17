import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link } from 'react-router-dom';

import Data from './components/Data';

class App extends React.Component {

  render() {
    return (
      <main>
        <div className="container">
          <div className="row">
            <h1>Hello</h1>
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
