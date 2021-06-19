import React from 'react';
import {useDispatch} from 'react-redux';
import {changeHandlerClosure} from '../helpers';

interface InputTextAreaProps {
  block: string;
  name: string;
  dataActionType?: string;
  value: string;
}

export default function InputTextArea({block, name, dataActionType, value}: InputTextAreaProps): React.ReactElement {
  const dispatch = useDispatch();
  const changeHandler = changeHandlerClosure(dispatch);
  
  return(
    <div className={`${block}__form-el-wrapper`}>
      <p>{name}</p>
      <textarea required className={`${block}__textarea`} name={name} data-action-type={dataActionType} value={value} onChange={changeHandler} />
    </div>
  );
};