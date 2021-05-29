//initialFormState is empty and is meant to hold state for unnamed forms.
//If a more specific form is required, such as a login or signup form, create a named form component,
//such as userLoginForm, and its corresponding reducer.
const initialAddressSearchFormState: AddressSearchFormState = {
  formData: {
    street: "",
    city: "",
    state: ""
  }
};

export interface AddressSearchFormState {
  formData: {
    street: string;
    city: string;
    state: string;
  }
}

export default function formReducer(state = initialAddressSearchFormState, action: {type: string, e: React.ChangeEvent<HTMLInputElement>}): AddressSearchFormState {
  switch(action.type) {
    case 'SET_STREET':
    case 'SET_CITY':
    case 'SET_STATE':
    case 'SET_ZIP':
      return {
        ...state,
        formData: {
          ...state.formData,
          [action.e.target.name]: action.e.target.value
        }
      };
    default:
      return state;  
  };
};