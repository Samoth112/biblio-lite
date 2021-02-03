import React from 'react';

export default function Grid(props) {
  return(
    // gridProps values should be class names
    // that define the grid-template,
    // grid-auto-rows, grid-auto-columns, and
    // the gap css grid properties.
    // These are the properties that currently
    // define grid containers.
    // Nested Grid components with no other grid items
    // between them should not be wrapped in GridItem components.
    <section className={`${props.className} grid
      ${props.gridProps.gridTemp}
      ${props.gridProps.gridAuto}
      ${props.gridProps.gap}`
    }>
      {props.children}
    </section>
  );
};