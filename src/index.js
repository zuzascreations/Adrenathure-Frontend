import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux';
import rootReducer from './reducer';

const localStorageMiddleware = store => next => action => {
  let result = next(action)
  localStorage.setItem('session', JSON.stringify(store.getState().user))
  return result
}

const saved = localStorage.getItem('session')
const initialStore = { user: saved ? JSON.parse(saved) : undefined }
const store = createStore(rootReducer, initialStore, applyMiddleware(localStorageMiddleware))


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
