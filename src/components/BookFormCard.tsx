import React, {PropsWithChildren} from 'react';
import Grid from './Grid';

interface BookFormCardProps {
  className: string;
  grid: string;
}

export default function BookFormCard({className, grid, children}: PropsWithChildren<BookFormCardProps>): React.ReactElement {
  return(
    <section className={className}>
      <Grid className={grid}>
        <section>
          <p className="book-form-card__add">add</p>
        </section>
        {children}
      </Grid>
    </section>
  )
}