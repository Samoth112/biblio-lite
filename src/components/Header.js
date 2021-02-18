import React from 'react';
import Grid from './Grid';

export default function Header(props) {
  return(
    <header className={`${props.className ? props.className : ""}${props.rows ? ` ${props.rows}` : ""}${props.cols ? ` ${props.cols}` : ""}`}>
      <Grid grid={props.grid} gap={props.gap} padding={props.padding} margin={props.margin} >
        {props.children}
      </Grid>
    </header>
  );
};