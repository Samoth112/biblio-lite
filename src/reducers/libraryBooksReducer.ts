import {LibraryBookState} from './libraryBookReducer';

const initialLibraryBooksState: LibraryBooksState = {
  littleLibraryId: 0,
  libraryBooks: [],
  empty: false
};

export interface LibraryBooksState {
  littleLibraryId: number;
  libraryBooks: LibraryBookState[];
  empty: boolean;
};

export default function libraryBooksReducer(state = initialLibraryBooksState, action: {type: string} & LibraryBooksState): LibraryBooksState {
  switch(action.type) {
    case 'SET_LIBRARY_BOOKS':
      if(action.libraryBooks.length > 0) {
        return {
          ...state,
          littleLibraryId: action.littleLibraryId,
          libraryBooks: action.libraryBooks,
          empty: false,
        };
      } else {
        return {
          ...state,
          littleLibraryId: action.littleLibraryId,
          libraryBooks: action.libraryBooks,
          empty: true
        }
      };
    default:
      return state;
  };
};