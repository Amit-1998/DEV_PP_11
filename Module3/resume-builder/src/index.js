import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import userReducer from './redux/reducers/userReducer';
import { createStore } from "redux";
import { Provider } from 'react-redux';

let myStore = createStore(userReducer);

ReactDOM.render(
  <Provider store={myStore}>
       <App />
  </Provider>,
  document.getElementById('root')
);
