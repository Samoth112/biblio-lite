import React from 'react';
import Grid from './Grid'

export default function Header(props) {
  return(
    // refer to Grid.js to see full list of gridProps
    <Grid className='header' gridAuto='grid-auto-rows-max-content-1fr'>
      {props.children}
    </Grid>
  );
};