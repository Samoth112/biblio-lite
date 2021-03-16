import React from 'react';
import Grid from './Grid';
import {GridProps, GridItemProps} from '../interfaces/interfaces';

export default function Header({className="", rows, cols, grid, gap="", padding="", margin="", children}: React.PropsWithChildren<GridItemProps & GridProps>): React.ReactElement {
  return(
    <header className={`${className} ${rows} ${cols}`}>
      <Grid grid={grid} gap={gap} padding={padding} margin={margin} >
        {children}
      </Grid>
    </header>
  );
};