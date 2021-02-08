import React from 'react';
import Grid from './Grid';

export default function Nav(props) {
  // Unlike Header.js, there may be multiple types of Nav components that
  // are defined by a class name of "header__nav" or "footer__nav," for example.
  // Also unlike Header.js and Home.js, the className prop should not populated
  // with a className that reflects the component name, like "nav." Instead,
  // use props.ClassName, which will be something like "header__nav" or "footer__nav."
  return(
    <Grid className={props.className} gridTemp={props.gridTemp} gridAuto={props.gridAuto} gridGap={props.gridGap}>

    </Grid>
  );
};