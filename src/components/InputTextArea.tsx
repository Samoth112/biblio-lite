import React from 'react';
import {useDispatch} from 'react-redux';
import {changeHandlerClosure} from '../helpers';

interface InputTextAreaProps {
  name: string;
  dataActionType?: string;
  value: string;
}

export default function InputTextArea({name, dataActionType, value}: InputTextAreaProps): React.ReactElement {
  const dispatch = useDispatch();
  const changeHandler = changeHandlerClosure(dispatch);
  
  return(
    <div className="input">
      <textarea required className='input__textarea' name={name} data-action-type={dataActionType} value={value} onChange={changeHandler} />
      <label className='input__label'>{name}</label>
    </div>
  );
};