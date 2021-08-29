import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import userReducer from './redux/reducers/userReducer';
import { createStore } from "redux";

let myStore = createStore(userReducer);

ReactDOM.render(
  <Provide store={myStore}>
       <App />
  </Provide>,
  document.getElementById('root')
);
