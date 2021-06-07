import React from 'react';
import Grid from './Grid';

// reusable component
interface HeaderProps {
  className: string;
  grid: string;
}

export default function Header({className, grid, children}: React.PropsWithChildren<HeaderProps>): React.ReactElement {
  return(
    <header className={className}>
      <Grid className={grid}>
        {children}
      </Grid>
    </header>
  );
};