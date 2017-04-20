import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import counter from './reducers';
import App from './container';
//保存全局的state到store
const store = createStore(counter);
const rootEl = document.querySelector('#root');
render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootEl);
