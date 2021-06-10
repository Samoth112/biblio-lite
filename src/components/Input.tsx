import React from 'react';
import {useDispatch} from 'react-redux';
import {changeHandlerClosure} from '../helpers';

// reusable component
interface InputProps {
  type: string;
  name: string;
  dataActionType?: string;
  dataAuthorIndex?: string;
  value: string;
}

export default function Input({type, name, dataActionType, dataAuthorIndex, value}: InputProps): React.ReactElement  {
  const dispatch = useDispatch();
  const changeHandler = changeHandlerClosure(dispatch);

  // Input components are controlled by their respecitve formReducers
  return(
    <div className="input">
      {
        dataAuthorIndex ?
          <>
            <input required className='input__input' type={type} name={name} data-action-type={dataActionType} data-author-index={dataAuthorIndex} value={value} onChange={changeHandler}/>
            <label className='input__label'>{name}</label>
          </>
        :
          <>
            <input required className='input__input' type={type} name={name} data-action-type={dataActionType} value={value} onChange={changeHandler}/>
            <label className='input__label'>{name}</label>
          </>
      } 
    </div>
  )
};
