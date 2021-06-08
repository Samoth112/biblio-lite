import {BookState} from './bookReducer';

// properties use underscores instead of camelCase
// in order to type LibraryBooks objects returned as
// JSON data from Rails.
const initialLibraryBookState: LibraryBookState = {
  id: 0,
  little_library_id: 0,
  book_id: 0,
  book: {
    id: 0,
    title: "",
    subtitle: "",
    description: "",
    img_url: "",
    authors: []
  }
};

export interface LibraryBookState {
  id: number;
  little_library_id: number;
  book_id: number;
  book: BookState;
};

export default function libraryBookReducer(state = initialLibraryBookState, action: {type: string} & LibraryBookState): LibraryBookState {
  switch(action.type) {
    case 'SET_LIBRARY_BOOK':
      return {
        ...state,
        id: action.id,
        little_library_id: action.little_library_id,
        book_id: action.book_id,
        book: action.book
      };
    default:
      return state;
  }
}