import React from 'react';

export default function Grid(props) {
  return(
    <section className={`${props.className} 
      ${props.gridProps.gridTemp} 
      ${props.gridProps.gridRows} 
      ${props.gridProps.colGap}
      ${props.gridProps.rowGap}`}>
      {props.children}
    </section>
  );
};