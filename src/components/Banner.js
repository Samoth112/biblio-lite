import React from 'react';
import Grid from './Grid';

export default function Banner(props) {
  //Banner should be used much in the same way as sections, to group related content that don't
  //necessarily warrant a semantic name. Banners that repeat a pattern should extracted into a named
  //or reusable component.
  return(
    <section className={`${props.className ? props.className : ""}${props.rows ? ` ${props.rows}` : ""}${props.cols ? ` ${props.cols}` : ""}`}>
      <Grid grid={props.grid} gap={props.gap} padding={props.padding} margin={props.margin} >
        {props.children}
      </Grid>
    </section>
  );
};