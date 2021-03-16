import React from 'react';
import Grid from './Grid';
import {GridProps, GridItemProps} from '../interfaces/interfaces';

export default function Form({className="", rows, cols, grid, gap="", padding="", margin="", children}: React.PropsWithChildren<GridItemProps & GridProps>): React.ReactElement {
  //Form is reusable and is controlled through its inputs and formReducer.
  //See formReducer.js for comments regarding contolled forms.
  return(
    <form className={`${className} ${rows} ${cols}`}>
      <Grid grid={grid} gap={gap} padding={padding} margin={margin} >
        {children}
      </Grid>
    </form>
  );
 };

