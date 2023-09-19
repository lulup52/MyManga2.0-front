// STRUCTURE IMPORTS
import React from 'react'
import ReactDOM from 'react-dom/client'
import { createStore } from 'redux';
import {Provider, connect } from 'react-redux';
// STYLE
import './index.css'
// COMPONENTS
import App from './App.jsx'
import userReducer from './reducer/userReducer'

const store = createStore(
  userReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
  </React.StrictMode>,
)
