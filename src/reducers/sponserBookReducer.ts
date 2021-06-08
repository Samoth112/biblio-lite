import {BookState} from './bookReducer';

const initialSponserBookState: SponserBookState = {
  id: 0,
  sponserId: 0,
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

export interface SponserBookState {
  id: number;
  sponserId: number;
  bookId: number;
  book: BookState;
};

export default function sponserBookReducer(state = initialSponserBookState, action: {type: string} & SponserBookState): SponserBookState {
  switch(action.type) {
    case 'SET_SPONSER_BOOK':
      return {
        ...state,
        id: action.id,
        sponserId: action.sponserId,
        bookId: action.bookId,
        book: action.book
      };
    default:
      return state;
  }
}