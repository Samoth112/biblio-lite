import {BookState} from './bookReducer';

const initialSponserBookState: SponserBookState = {
  id: 0,
  sponser_id: 0,
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

export interface SponserBookState {
  id: number;
  sponser_id: number;
  book_id: number;
  book: BookState;
};

export default function sponserBookReducer(state = initialSponserBookState, action: {type: string} & SponserBookState): SponserBookState {
  switch(action.type) {
    case 'SET_SPONSER_BOOK':
      return {
        ...state,
        id: action.id,
        sponser_id: action.sponser_id,
        book_id: action.book_id,
        book: action.book
      };
    default:
      return state;
  }
}