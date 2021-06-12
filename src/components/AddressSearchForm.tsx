import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {AppState} from '../index';
import Form from './Form';
import Input from './Input';
import InputSelect from './InputSelect';
import InputSubmit from './InputSubmit';

export default function AddressSearchForm(): React.ReactElement  {
  const addressSearchFormData = useSelector((state: AppState ) => state.addressSearchForm.formData);
  const dispatch = useDispatch();
  const submitAddress = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    fetch(`https://lite-api.herokuapp.com/results`, {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': 'https://biblio-lite.netlify.app'
      },
      // for now, only search for this address while the database is so limited.
      body: JSON.stringify({street: "1927 Bartle Ave.", city: "Scotch Plains", state: "NJ"})
    })
    .then((resp) => 
      resp.json())
    .then((json) => {
      if(json.status) {
        dispatch({type: "SET_RESULTS", coordinates:{center: {lat: json.center.lat, lng: json.center.lng}}, libraries: json.little_libraries, searchSuccess: json.status});
      };
    });
  };

  return(
    <Form className="address-search-form" grid="address-search-form-grid" submitHandler={submitAddress}>
      <Input type="text" name="street" dataActionType="SET_STREET" value={addressSearchFormData.street} />
      <Input type="text" name="city" dataActionType="SET_CITY" value={addressSearchFormData.city} />
      <InputSelect name="state" dataActionType="SET_STATE" value={addressSearchFormData.state} />
      <InputSubmit value="search" />
    </Form>
  );
}