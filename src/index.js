import React from 'react';
import ReactDOM from 'react-dom';

import {Provider} from 'react-redux';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

import store from './store';

import Home from './containers/HomeContainer';
import About from './components/About';

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <div>
        <h1>Hello React</h1>
        <nav>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </nav>
        <main>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
        </main>
      </div>
    </Router>
  </Provider>,
  document.getElementById('app')
);
