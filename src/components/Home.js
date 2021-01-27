import React, {Component} from 'react';
import Grid from './Grid';

export default class Home extends Component {
  render() {
    return(
      <Grid className="home" gridProps={{
        gridTemp: "",
        gridCols: "",
        gridRows: "",
        colGap: "",
        rowGap: "",
      }}>

      </Grid>
    );
  };
};