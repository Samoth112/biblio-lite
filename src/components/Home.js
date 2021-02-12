import React from 'react';
import Grid from './Grid';
import GridItem from './GridItem';
import Header from './Header';
import Nav from './Nav';
import Banner from './Banner';
import Form from './Form';
import Input from './Input';

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
          <Nav className="header__nav" gridTemp="grid-temp-1x3">
            <GridItem gridRow="row1" gridCol="col2" spacing="ptb-1rem">
              {// Utility classes arranged in this order:
               // font-family, font-size, font-weight, line-height, text-align.
              }
              <p className="dm-serif-display fs-2rem fw-600 ta-center">
                Biblio
              </p>
            </GridItem>
          </Nav>
        </GridItem>
        <GridItem gridRow="row2" gridCol="col1" spacing="pt-6rem pr-2rem pl-2rem">
          <Banner gridTemp="grid-temp-1x12" gridGap="grid-col-gap-2em">
            <GridItem gridRow="row1" gridCol="col2-span6">
              <p className="dm-serif-display fs-5rem lh-1em">
                Enter Your Address to Find Books Near You
              </p>
            </GridItem>
            <GridItem gridRow="row1" gridCol="col8-span3">
              <Form gridAuto="grid-auto-rows-max-content">
                <Input type="text" name="address" dataActionType="SET_ADDRESS"/>
              </Form>
            </GridItem>
          </Banner>
        </GridItem>
      </Header>
    </Grid>
  );
};

