import React from 'react';
import Grid from './Grid';
import {GridProps, GridItemProps} from '../interfaces/interfaces';

export default function Banner({className="", rows, cols, grid, gap="", padding="", margin="", children}: React.PropsWithChildren<GridItemProps & GridProps>): React.ReactElement {
  //Banner should be used much in the same way as sections, to group related content that don't
  //necessarily warrant a semantic name. Banners that repeat a pattern should extracted into a named
  //or reusable component.
  return(
    <section className={`${className} ${rows} ${cols}`}>
      <Grid grid={grid} gap={gap} padding={padding} margin={margin} >
        {children}
      </Grid>
    </section>
  );
};