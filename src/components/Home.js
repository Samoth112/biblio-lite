import React from 'react';
import Grid from './Grid';
import GridItem from './GridItem';
import Header from './Header';
import Nav from './Nav';
import Banner from './Banner';

export default function Home(props) {
  return(
    // Home.js is unlikely to be reused anywhere else, meaning other
    // Home components whose grids could be defined by either 
    // the grid-template, grid-auto-rows/columns, and gap CSS properties
    // won't exist. There is therefore no need for the corresponding props to
    // each of these CSS properties to be used below, however, it helps with
    // development, as Home's grid could be defined differently later on.
    <Grid className='home' gridTemp={props.gridTemp} gridAuto={props.gridAuto} gridGap={props.gridGap}>
      <Header gridAuto="grid-auto-rows-max-content-1fr">
        <GridItem gridRow="row1" gridCol="col1">
          <Nav className="header__nav">

          </Nav>
        </GridItem>
        <GridItem gridRow="row2" gridCol="col1">
          <Banner>

          </Banner>
        </GridItem>
      </Header>
    </Grid>
  );
};