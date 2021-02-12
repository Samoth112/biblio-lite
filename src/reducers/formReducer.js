const initialFormState ={
  formData: {
    
  }
};

export default function formReducer(state = initialFormState, action) {
  console.log(state);
  switch(action.type){
    case 'SET_ADDRESS':
      return {
        ...state,
        formData: {
          ...state.formData,
          [action.e.target.name]: action.e.target.value
        }
      };
    default:
      return state
  };
};