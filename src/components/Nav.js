import React from 'react';
import Grid from './Grid';

export default function Nav(props) {
  return(
    <nav className={`${props.className ? props.className : ""}${props.rows ? ` ${props.rows}` : ""}${props.cols ? ` ${props.cols}` : ""}`}>
      <Grid grid={props.grid} gap={props.gap} padding={props.padding} margin={props.margin} >
        {props.children}
      </Grid>
    </nav>
  );
};