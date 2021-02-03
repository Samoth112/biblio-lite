import React from 'react';

export default function GridItem(props) {
  return(
    // gridItemProps values should be class names that
    // define the grid-row, grid-column, and grid-area
    // css grid-item css properites. 
    // If a GridItem should itself also be a grid container,
    // include 'grid' in className.
    // GridItem components should always have at least one 
    // ancestor this is a Grid component.
    <section className={`${props.className}
      ${props.gridItemProps.gridRow}
      ${props.gridItemProps.gridCol}
      ${props.gridItemProps.gridArea}`
    }>


    </section>
  );
};