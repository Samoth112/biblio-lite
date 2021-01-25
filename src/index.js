import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import {Provider} from 'react-redux';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import firebase from 'firebase';

const rootReducer = combineReducers({

});

const store = createStore(rootReducer, applyMiddleware(thunk));

const firebaseConfig = {
  apiKey: "AIzaSyB_uDbHtybqtLGld2Z_D9lw7-wZnerutV8",
  authDomain: "biblio-lite-15027.firebaseapp.com",
  databaseURL: "https://biblio-lite-15027-default-rtdb.firebaseio.com",
  projectId: "biblio-lite-15027",
  storageBucket: "biblio-lite-15027.appspot.com",
  messagingSenderId: "316410964557",
  appId: "1:316410964557:web:10afa7b3711ccb719c0a04",
  measurementId: "G-C5LDJY4KCJ"
};
firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
