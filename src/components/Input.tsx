import React from 'react';
import {useDispatch} from 'react-redux';
import {changeHandlerClosure} from '../helpers';

// reusable component
interface InputProps {
  block: string;
  name: string;
  dataActionType?: string;
  dataAuthorIndex?: string;
  value: string;
}

export default function Input({block, name, dataActionType, dataAuthorIndex, value}: InputProps): React.ReactElement  {
  const dispatch = useDispatch();
  const changeHandler = changeHandlerClosure(dispatch);

  // Input components are controlled by their respecitve formReducers
  return(
    <div className={`${block}__form-el-wrapper`}>
      {
        dataAuthorIndex ?
          <>
            <input required className={`${block}__input`} name={name} data-action-type={dataActionType} data-author-index={dataAuthorIndex} value={value} onChange={changeHandler}/>
            <label className={`${block}__label`}>{name}</label>
          </>
        :
          <>
            <input required className={`${block}__input`} name={name} data-action-type={dataActionType} value={value} onChange={changeHandler}/>
            <label className={`${block}__label`}>{name}</label>
          </>
      } 
    </div>
  )
};
