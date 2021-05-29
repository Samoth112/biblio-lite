import React from 'react';
import {useDispatch} from 'react-redux';
import {changeForm} from '../actions/changeForm';

interface InputProps {
  type: string;
  name: string;
  dataActionType?: string;
  dataAuthorIndex?: string;
  value: string;
}

export default function Input({type, name, dataActionType, dataAuthorIndex, value}: InputProps): React.ReactElement  {
  const dispatch = useDispatch();
  const changeHandler = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    e.preventDefault();
    const action = changeForm(e);
    dispatch(action);
  };

  //Input elements are controlled by formReducer. See notes in formReducer.js for more.
  return(
    <div className="input">
      {type !== 'submit' ? 
        dataAuthorIndex ?
          <>
            <input required className='input__input' type={type} name={name} data-action-type={dataActionType} data-author-index={dataAuthorIndex} value={value} onChange={changeHandler}/>
            <label className='input__label'>{name}</label>
          </>
        :
          type === "textarea" ?
            <>
              <textarea required className='input__textarea' name={name} data-action-type={dataActionType} value={value} onChange={changeHandler} />
              <label className='input__label'>{name}</label>
            </>
          :
            <>
              <input required className='input__input' type={type} name={name} data-action-type={dataActionType} value={value} onChange={changeHandler}/>
              <label className='input__label'>{name}</label>
            </>
      :
        <input className='input__submit' type='submit' value={value} />
      } 
    </div>
  )
};
