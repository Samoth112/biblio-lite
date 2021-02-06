import React from 'react';

export default function Grid(props) {
  return(
    // Prop values should be class names that define the grid-template,
    // grid-auto-rows/columns, and gap css grid properties. These are 
    // the properties that currently define grid containers.
    // Nested Grid components with no other grid items
    // between them should not be wrapped in GridItem components.
    <section className={`${props.className} ${props.gridTemp} ${props.gridAuto} ${props.gridGap}`}>
      {props.children}
    </section>            
  );
};

Grid.defaultProps = {
  gridTemp: "",
  gridAuto: "",
  gridGap: ""
};