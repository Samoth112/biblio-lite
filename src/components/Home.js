import React from 'react';
import Grid from './Grid';

export default function Home(props) {
  return(
    <section className='home'>
      <Grid grid={props.grid} gap={props.gap} padding={props.padding} margin={props.margin} >
        {props.children}
      </Grid>
    </section>
  );
};

