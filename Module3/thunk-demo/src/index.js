import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk'; // here thunk is our middleware
import reducer from './redux/reducers';
import { Provider } from 'react-redux';


let myStore = createStore(reducer,  applyMiddleware(thunk)); //ye jo thunk is hmara middleware for our Store
// hmare middleware ke paas saare actions nhi aate kuch specific action hi aate hai

ReactDOM.render(
      <Provider store={myStore}>
           <App />
      </Provider>,
      document.getElementById('root')
);
