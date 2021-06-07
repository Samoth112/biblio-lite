import {BookState} from './bookReducer';

const initialLibraryBookState: LibraryBookState = {
  id: 0,
  littleLibraryId: 0,
  bookId: 0,
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
  littleLibraryId: number;
  bookId: number;
  book: BookState;
};

export default function libraryBookReducer(state = initialLibraryBookState, action: {type: string} & LibraryBookState): LibraryBookState {
  switch(action.type) {
    case 'SET_LIBRARY_BOOK':
      return {
        ...state,
        id: action.id,
        littleLibraryId: action.littleLibraryId,
        bookId: action.bookId,
        book: action.book
      };
    default:
      return state;
  }
}