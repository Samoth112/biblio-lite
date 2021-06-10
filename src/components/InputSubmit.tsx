import React from 'react';

interface InputSubmitProps { 
  value: string;
}

export default function InputSubmit({value}: InputSubmitProps): React.ReactElement {
  return(
    <div className="input"> 
      <input className='input__submit' type='submit' value={value} />
    </div>
  );
};