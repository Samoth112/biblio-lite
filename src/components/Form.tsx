import React from 'react';
import Grid from './Grid';

interface FormProps {
  className: string;
  grid: string;
  submitHandler: (e: React.FormEvent<HTMLFormElement>) => void;
}

export default function Form({className, grid, submitHandler, children}: React.PropsWithChildren<FormProps>): React.ReactElement {
  //Form is reusable and is controlled through its inputs and formReducer.
  //See formReducer.js for comments regarding contolled forms.
  return(
    <form className={className} onSubmit={submitHandler}>
      <Grid className={grid} >
        {children}
      </Grid>
    </form>
  );
 };

