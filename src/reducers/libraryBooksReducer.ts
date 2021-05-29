import {BookState} from './bookReducer';

const initialLibraryBooksState: LibraryBooksState = {
  littleLibraryId: 0,
  libraryBooks: [],
  empty: false,
  redirect: false
};

export interface LibraryBooksState {
  littleLibraryId: number;
  libraryBooks: {
    id: number;
    little_library_id: number;
    book_id: number;
    book: BookState;
  }[];
  empty: boolean;
  redirect: boolean;
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
          redirect: true
        };
      } else {
        return {
          ...state,
          littleLibraryId: action.littleLibraryId,
          libraryBooks: action.libraryBooks,
          empty: true,
          redirect: true
        }
      };
    case 'STOP_REDIRECT':
      return {
        ...state,
        redirect: false
      }
    default:
      return state;
  };
};