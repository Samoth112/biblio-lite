import ReactDOM from 'react-dom';
import {createStore, applyMiddleware, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import {Provider} from 'react-redux';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import addressSearchFormReducer from './reducers/addressSearchFormReducer';
import resultsReducer from './reducers/resultsReducer';
import bookReducer from './reducers/bookReducer';
import libraryBooksReducer from './reducers/libraryBooksReducer';
import sponserBooksReducer from './reducers/sponserBooksReducer';
import sponserBookReducer from './reducers/sponserBookReducer';
import {saveState, loadState} from './localStorage';
import libraryBookReducer from './reducers/libraryBookReducer';
import libraryBookFormReducer from './reducers/libraryBookFormReducer'

const rootReducer = combineReducers({
  addressSearchForm: addressSearchFormReducer,
  results: resultsReducer,
  book: bookReducer,
  libraryBooks: libraryBooksReducer,
  libraryBook: libraryBookReducer,
  sponserBooks: sponserBooksReducer,
  sponserBook: sponserBookReducer,
  libraryBookForm: libraryBookFormReducer
});

const persistedState = loadState(); 
const store = createStore(rootReducer, persistedState, applyMiddleware(thunk));

store.subscribe(() => {
  saveState({
    results: store.getState().results,
    libraryBook: store.getState().libraryBook,
    libraryBooks: store.getState().libraryBooks,
    sponserBook: store.getState().sponserBook,
    sponserBooks: store.getState().sponserBooks
  });
});

export type AppState = ReturnType<typeof rootReducer>

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
