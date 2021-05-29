import {ResultsState} from './reducers/resultsReducer';
import {LibraryBookState} from './reducers/libraryBookReducer';
import {LibraryBooksState} from './reducers/libraryBooksReducer';
import {SponserBookState} from './reducers/sponserBookReducer';
import {SponserBooksState} from './reducers/sponserBooksReducer';


interface PersistedState {
 results: ResultsState;
 libraryBook: LibraryBookState;
 libraryBooks: LibraryBooksState;
 sponserBook: SponserBookState;
 sponserBooks: SponserBooksState
}

export const saveState = (state: PersistedState) => {
  try {
    const serializedState = JSON.stringify(state);
    sessionStorage.setItem('state', serializedState);
  } catch (err) {
    // ignore write errors
  }
};

export const loadState = () => {
  try {
    const serializedState = sessionStorage.getItem('state');
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch(err) {
    return undefined;
  }
}