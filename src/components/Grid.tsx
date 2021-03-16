import React from 'react';
import {GridProps} from '../interfaces/interfaces';

export default function Grid({grid, gap="", padding="", margin="", children}: React.PropsWithChildren<GridProps>): React.ReactElement {
  return(
    <div className={`grid ${grid} ${gap} ${margin} ${padding}`}>      
      {children}
    </div>           
  );
};