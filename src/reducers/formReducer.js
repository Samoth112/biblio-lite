//initialFormState is empty and is meant to hold state for unnamed forms.
//If a more specific form is required, such as a login or signup form, create a named form component,
//such as userLoginForm, and its corresponding reducer.
const initialFormState ={
  formData: {
    
  }
};

export default function formReducer(state = initialFormState, action) {
  console.log(state);
  if(action.e) {
    return {
      ...state,
      formData: {
        ...state.formData,
        [action.e.target.name]: action.e.target.value
      }
    };  
  } else {
    return state;
  };
};