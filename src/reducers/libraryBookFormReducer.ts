const initialLibraryFormState: LibraryBookFormState = {
  formData: {
    libraryId: 0,
    book: {
      title: "",
      subtitle: "",
      description: "",
      imgUrl: "",
      authors: [{
        firstName: "",
        lastName: ""
      }],
      isbn: ""
    }
  }
};

export interface LibraryBookFormState {
  formData: {
    libraryId: number;
    book: {
      title: string;
      subtitle: string;
      description: string;
      imgUrl: string;
      authors: {
        firstName: string;
        lastName: string;
      }[];
      isbn: string;
    };
  };
};

export default function libraryBookFormReducer(state = initialLibraryFormState, action: {type: string, e?: React.ChangeEvent<HTMLInputElement>}): LibraryBookFormState {
  let authors = state.formData.book.authors;
  if(action.e) {
    switch(action.type) {
      case 'SET_TITLE':
      case 'SET_SUBTITLE':
      case 'SET_DESCRIPTION':
      case 'SET_ISBN':
        return {
          ...state,
          formData: {
            ...state.formData,
            book: {
              ...state.formData.book,
              [action.e.target.name]: action.e.target.value
            }
          }
        };
      case 'SET_IMGURL':
        return {
          ...state,
          formData: {
            ...state.formData,
            book: {
              ...state.formData.book,
              imgUrl: action.e.target.value
            }
          }
        };
      case 'SET_AUTHOR_FIRST_NAME':
        if(action.e.target.dataset.authorIndex) {
          authors[parseInt(action.e.target.dataset.authorIndex)].firstName = action.e.target.value;
        };
        return {
          ...state,
          formData: {
            ...state.formData,
            book: {
              ...state.formData.book,
              authors: authors
            }
          }
        }
      case 'SET_AUTHOR_LAST_NAME':
        if(action.e.target.dataset.authorIndex) {
          authors[parseInt(action.e.target.dataset.authorIndex)].lastName = action.e.target.value;
        };
        return {
          ...state,
          formData: {
            ...state.formData,
            book: {
              ...state.formData.book,
              authors: authors
            }
          }
        }
      default:
        return state;
    };
  } else {
    switch(action.type) {
      case 'ADD_AUTHOR':
        return {
          ...state,
          formData: {
            ...state.formData,
            book: {
              ...state.formData.book,
              authors: [
                ...state.formData.book.authors,
                {
                  firstName: "",
                  lastName: "",
                }
              ]
            }
          }
        };
      default:
        return state;
    };
  }; 
};