import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { HashRouter } from 'react-router-dom';
import firebase from './firebase/Config'
import {FirebaseContext} from './store/Contexts'

ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
      <FirebaseContext.Provider value={{ firebase }}>
        <App />
      </FirebaseContext.Provider>
    </HashRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

