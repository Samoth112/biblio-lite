import React from 'react';
import Grid from './Grid';

// reusable component
interface FormProps {
  className: string;
  grid: string;
  submitHandler: (e: React.FormEvent<HTMLFormElement>) => void;
}

export default function Form({className, grid, submitHandler, children}: React.PropsWithChildren<FormProps>): React.ReactElement {
  return(
    <form className={className} onSubmit={submitHandler}>
      <Grid className={grid} >
        {children}
      </Grid>
    </form>
  );
 };

