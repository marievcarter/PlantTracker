import '@babel/polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Root } from './components';
import { Router } from 'react-router-dom';
import store from './store';
import history from './history';

render(
  <Provider store={store}>
    <Router history={history}>
      <Root />
    </Router>
  </Provider>,
  document.getElementById('app')
);
