import React from 'react';

export default function Grid(props) {
  let grid = props.grid ? ` ${props.grid}` : "";
  let gap = props.gap ? ` ${props.gap}` : "";
  let padding = props.padding ? ` ${props.padding}` : "";
  let margin = props.margin ? ` ${props.margin}` : "";

  return(
    <div className={`grid${grid}${gap}${margin}${padding}`}>      
      {props.children}
    </div>           
  );
};