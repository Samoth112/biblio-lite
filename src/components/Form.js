import React, {Component} from 'react';
import Grid from './Grid';

export default class Form extends Component {
  constructor(props) {
    super(props);
    this.state={};
  };

  render() {
    return(
      <Grid className="form" gridTemp={this.props.gridTemp} gridAuto={this.props.gridAuto} gridGap={this.props.gridGap}>
        {this.props.children}
      </Grid>
    );
  }
 };

