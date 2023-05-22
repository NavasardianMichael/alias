import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createStore } from 'redux';
import { mainReducer } from './store/reducer';
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(document.getElementById('root'));

const store = createStore(mainReducer)

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);