import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { rootReducer } from './reducer';
import {Provider} from 'react-redux'
import {applyMiddleware, createStore, compose} from 'redux'
import thunk from 'redux-thunk';


const Reducer = (state = {items: []}, action) => {
  switch(action.type) {
    case 'add': return {items: [...state.items, action.payload]}
    default: return state
  }
}
const store = createStore(Reducer, 
  applyMiddleware(thunk)
);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
