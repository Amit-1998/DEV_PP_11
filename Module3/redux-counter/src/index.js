import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { combineReducers, createStore } from "redux"
import reducer, { counterReducer } from "./redux/reducer";
import { Provider } from "react-redux"; // for connecting our React App with redux
import {countReducer, loginReducer} from "./redux/reducer";

let rootReducer = combineReducers({
    count: counterReducer,
    logged: loginReducer
});

// createStore  is a function which comes from redux library
// createStore() function ko hame ek reducer dena hota hai

// let myStore = createStore(reducer); // is function call se hame Store milega
// Store ko alag se State deni ki zaroorat nhi, reducer ke ander pehle se initialize kari hui thi

// abhi tak hamne sirf redux ka code likha hai i.e all its three entities
// now it's time to connect our Reacty App to redux , so for that import here Provider from react-redux


// Now we will wrap our <App / > component with Provider Comp as in context API
// in contextAPI Provider has taken value as attribute
// but in redux Provider comp takes store as its attribute

// because of this Provider comp ,our state is accessible to our complete React App

// let myStore = createStore(combineReducers({})) // combineReducers is a functionalso came from redux library
// combineReducers takes an object

let myStore = createStore(rootReducer);

ReactDOM.render(
    <Provider store={myStore} > 
        <App />
    </Provider>,
    document.getElementById('root')
);
