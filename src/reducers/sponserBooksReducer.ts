import {SponserBookState} from './sponserBookReducer';

const initialSponserBooksState: SponserBooksState = {
  sponserBooks: []
};

export interface SponserBooksState {
  sponserBooks: SponserBookState[];
};

export default function sponserBooksReducer(state = initialSponserBooksState, action: {type:string} & SponserBooksState): SponserBooksState {
  switch(action.type) {
    case 'SET_SPONSER_BOOKS':
      return {
        ...state,
        sponserBooks: action.sponserBooks
      };
    default:
      return state;
  };
};