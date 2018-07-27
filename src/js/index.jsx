import '../css/reset.css';
import '../css/main.scss';

import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';

import App from './react/containers/app';
import reducers from './redux/todo/reducers';

const store = createStore(
  reducers,
  applyMiddleware(thunk),
);

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('app'),
);
