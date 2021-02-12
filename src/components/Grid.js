import React, {Component} from 'react';

export default class Grid extends Component {
  render() {
    let grid;
    // Prop values should be class names that define the grid-template,
    // grid-auto-rows/columns, and gap css grid properties. These are 
    // the properties that currently define grid containers.
    // Nested Grid components with no other grid items
    // between them should not be wrapped in GridItem components.
    if(this.props.className === 'header') {
      grid = 
      <header className={`${this.props.className} ${this.props.gridTemp} ${this.props.gridAuto} ${this.props.gridGap}`}>      
        {this.props.children}
      </header> 
    } else if(this.props.className.includes('__nav') || this.props.className === 'nav'){
      grid =
      <nav className={`${this.props.className} ${this.props.gridTemp} ${this.props.gridAuto} ${this.props.gridGap}`}>      
        {this.props.children}
      </nav>
    } else if(this.props.className.includes('__form') || this.props.className === 'form'){
      grid =
      <form className={`${this.props.className} ${this.props.gridTemp} ${this.props.gridAuto} ${this.props.gridGap}`}>      
        {this.props.children}
      </form>
    } else {
      grid =
      <section className={`${this.props.className} ${this.props.gridTemp} ${this.props.gridAuto} ${this.props.gridGap}`}>      
        {this.props.children}
      </section>
    }
    
    return(
      grid           
    );
  };
};

Grid.defaultProps = {
  gridTemp: "",
  gridAuto: "",
  gridGap: ""
};