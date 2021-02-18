import React from 'react';
import Grid from './Grid';

export default function Form(props) {
  //Form is reusable and is controlled through its inputs and formReducer.
  //See formReducer.js for comments regarding contolled forms.
  return(
    <form className={`${props.className ? props.className : ""}${props.rows ? ` ${props.rows}` : ""}${props.cols ? ` ${props.cols}` : ""}`}>
      <Grid grid={props.grid} gap={props.gap} padding={props.padding} margin={props.margin} >
        {props.children}
      </Grid>
    </form>
  );
 };

