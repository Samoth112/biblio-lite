import React from 'react';

interface InputSubmitProps {
  block: string; 
  value: string;
}

export default function InputSubmit({block, value}: InputSubmitProps): React.ReactElement {
  return(
    <div className={`${block}__form-el-wrapper`}> 
      <input className={`${block}__submit`} type='submit' value={value} />
    </div>
  );
};