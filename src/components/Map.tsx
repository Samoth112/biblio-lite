import React from 'react';
import Grid from './Grid';

// resusable component
interface MapProps {
  className: string;
  grid: string;
}

export default function Map({className, grid}: MapProps): React.ReactElement {
  return(
    <section className={className}>
      <Grid className={grid}>
        <div id="map"></div>
      </Grid>
    </section>
  );
};