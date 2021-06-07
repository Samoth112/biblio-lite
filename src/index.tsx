import ReactDOM from 'react-dom';
import {createStore, applyMiddleware, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import {Provider} from 'react-redux';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import addressSearchFormReducer from './reducers/addressSearchFormReducer';
import bookReducer from './reducers/bookReducer';
import libraryBookReducer from './reducers/libraryBookReducer';
import libraryBooksReducer from './reducers/libraryBooksReducer';
import libraryBookFormReducer from './reducers/libraryBookFormReducer';
import resultsReducer from './reducers/resultsReducer';
import sponserBookReducer from './reducers/sponserBookReducer';
import sponserBooksReducer from './reducers/sponserBooksReducer';
import {saveState, loadState} from './localStorage';

const rootReducer = combineReducers({
  addressSearchForm: addressSearchFormReducer,
  book: bookReducer,
  libraryBook: libraryBookReducer,
  libraryBooks: libraryBooksReducer,
  libraryBookForm: libraryBookFormReducer,
  results: resultsReducer,
  sponserBook: sponserBookReducer,
  sponserBooks: sponserBooksReducer
});
// provides a state type for useSelector
export type AppState = ReturnType<typeof rootReducer>

const persistedState = loadState(); 
const store = createStore(rootReducer, persistedState, applyMiddleware(thunk));

store.subscribe(() => {
  saveState({
    libraryBook: store.getState().libraryBook,
    libraryBooks: store.getState().libraryBooks,
    results: store.getState().results,
    sponserBook: store.getState().sponserBook,
    sponserBooks: store.getState().sponserBooks
  });
});

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
