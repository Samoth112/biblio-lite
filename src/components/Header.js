import React from 'react';
import Grid from './Grid'

export default function Header(props) {
  return(
    // Unlike Home.js, which is unlikely to be reused, Header.js more than likely
    // will be. To keep this container flexible and able to accomodate any grid, 
    // whether it be defined by gridTemp, gridAuto, or gridGap, each prop should be 
    // included below, to be assigned a value through the props set on <Header />.
    // For the props not set, they will be assigned a default value through defaultProps.
    <Grid className='header' gridTemp={props.gridTemp} gridAuto={props.gridAuto} gridGap={props.gridGap}>
      {props.children}
    </Grid>
  );
};