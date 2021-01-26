import React from 'react';

export default function Nav(props) {
  return(
    <nav className={`nav ${props.className}`}>
      {props.children}
    </nav>
  );
};