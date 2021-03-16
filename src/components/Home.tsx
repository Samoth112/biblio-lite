import React from 'react';
import Grid from './Grid';
import {GridProps} from '../interfaces/interfaces';

export default function Home({grid, children}: React.PropsWithChildren<GridProps>): React.ReactElement {
  return(
    <section className='home'>
      <Grid grid={grid}>
        {children}
      </Grid>
    </section>
  );
};