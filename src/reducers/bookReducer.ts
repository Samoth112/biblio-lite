const initialBookState: BookState = {
  id: 0,
  title: "",
  subtitle: "",
  description: "",
  img_url: "",
  authors: []
};

export interface BookState {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  img_url: string;
  authors: {
    first_name: string;
    last_name: string;
  }[];
};

export default function bookReducer(state = initialBookState, action: {type: string} & BookState): BookState {
  switch(action.type) {
    case 'SET_BOOK':
      return {
        ...state,
        id: action.id,
        title: action.title,
        subtitle: action.subtitle,
        description: action.description,
        img_url: action.img_url,
        authors: action.authors
      };
    default:
      return state;
  };
};