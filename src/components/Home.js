import React, {Component} from 'react';
import Grid from './Grid';

export default class Home extends Component {
  render() {
    return(
      // refer to Grid.js to see full list of gridProps
      <Grid className="home" gridProps={{
        gridAuto: "grid-auto-rows-max-content"
      }}>

      </Grid>
    );
  };
};