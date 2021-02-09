import React from 'react';

export default function GridItem(props) {
  return(
    // Props values should be class names that define the grid-row, 
    // grid-column, and grid-area css properites that place a GridItem
    // within its parent Grid component. 
    // GridItem components should always have at least one 
    // ancestor this is a Grid component.
    <div className={`${props.gridRow} ${props.gridCol} ${props.gridArea} ${props.spacing}`}>
      {props.children}
    </div>
  );
};

GridItem.defaultProps = {
  gridRow: "",
  gridCol: "",
  gridArea: "",
  spacing: ""
}