import React from 'react';
import Form from './Form';
import Input from './Input';
import {useSelector, useDispatch} from 'react-redux';
import {AppState} from '../index';

export default function AddressSearchForm(): React.ReactElement  {
  const addressSearchFormData = useSelector((state: AppState ) => state.addressSearchForm.formData);
  const dispatch = useDispatch();
  const submitAddress = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    fetch(`https://lite-api.herokuapp.com/results`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(addressSearchFormData)
    })
    .then((resp) => 
      resp.json())
    .then((json) => {
      if(json.status) {
        dispatch({type: "SET_RESULTS", coordinates:{center: {lat: json.center.lat, lng: json.center.lng}}, libraries: json.little_libraries, searchSuccess: json.status});
      }
    });
  }

  return(
    <Form className="address-search-form" grid="address-search-form-grid" submitHandler={submitAddress}>
      <Input type="text" name="street" dataActionType="SET_STREET" value={addressSearchFormData.street} />
      <Input type="text" name="city" dataActionType="SET_CITY" value={addressSearchFormData.city} />
      <Input type="text" name="state" dataActionType="SET_STATE" value={addressSearchFormData.state} />
      <Input type="submit" name="submit" value="search" />
    </Form>
  );
}