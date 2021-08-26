import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

let myStore = createStore(reducer);

ReactDOM.render(
    <Provider store={myStore}>
         <App />
    </Provider>,
    document.getElementById('root')
);
