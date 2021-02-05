import React, {Component} from 'react';
import Grid from './Grid';
import GridItem from './GridItem';
import Header from './Header';

export default class Home extends Component {
  render() {
    return(
      // refer to Grid.js to see full list of gridProps
      <Grid className="home" 
        gridProps={{
          gridAuto: "grid-auto-rows-max-content"
        }}
      >
        <Header className="header" 
          gridProps={{
            gridAuto: "grid-auto-rows-max-content-1fr"
          }}
        >
          <GridItem gridItemProps={{
            gridRow: "row1",
            gridCol: "col1"  
          }}>
          </GridItem>
        </Header>
      </Grid>
    );
  };
};