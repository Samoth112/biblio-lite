import React from 'react';
import Grid from './Grid';

export default function Banner(props) {
  return(
    <Grid className="banner" gridTemp={props.gridTemp} gridAuto={props.gridAuto} gridGap={props.gridGap}>
      {props.children}
    </Grid>
  );
};