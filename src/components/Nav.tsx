import React from 'react';
import Grid from './Grid';

// reusable component
interface NavProps {
  className: string;
  grid: string;
}

export default function Nav({className, grid, children}: React.PropsWithChildren<NavProps>): React.ReactElement {
  return(
    <nav className={className}>
      <Grid className={grid}>
        {children}
      </Grid>
    </nav>
  );
};